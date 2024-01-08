import { Form, Input, Select, Button, Typography, Card, Upload } from "antd";
import { Inertia } from "@inertiajs/inertia";
import Layout from "../../Layout";

export default function UserForm({ title, roles, data, errors }) {
    const user = data?.data;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        if (values.avatar) values.avatar = values.avatar[0].originFileObj;

        if (user) Inertia.put(`/users/${user.id}`, values);
        else Inertia.post("/users", values);
    };

    if (errors) {
        Object.keys(errors).forEach((key) => {
            form.setFields([
                {
                    name: key,
                    errors: [errors[key]],
                },
            ]);
        });
    }

    const normFile = (e) => {
        console.log("Upload event:", e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    return (
        <Layout>
            <Card style={{ maxWidth: 500 }}>
                <Typography.Title>{title}</Typography.Title>
                <Form
                    form={form}
                    onFinish={onFinish}
                    initialValues={user && user}
                >
                    {!user && (
                        <Form.Item
                            name="avatar"
                            valuePropName="fileList"
                            getValueFromEvent={normFile}
                        >
                            <Upload
                                name="avatar"
                                listType="picture"
                                beforeUpload={() => false}
                            >
                                <Button>Upload Avatar</Button>
                            </Upload>
                        </Form.Item>
                    )}
                    <Form.Item name="name">
                        <Input placeholder="Name" />
                    </Form.Item>
                    <Form.Item name="email">
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item name="role_id">
                        <Select placeholder="Select a role">
                            {roles.map((role) => (
                                <Select.Option key={role.id} value={role.id}>
                                    {role.name}
                                </Select.Option>
                            ))}
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </Layout>
    );
}
