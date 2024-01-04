import { Form, Input, Select, Button, Typography, Card } from "antd";
import { Inertia } from "@inertiajs/inertia";
import Layout from "../../Layout";

export default function UserForm({ title, roles, data }) {
    const user = data?.data;
    const [form] = Form.useForm();
    const onFinish = (values) => {
        if (user) Inertia.put(`/users/${user.id}`, values);
        else Inertia.post("/users", values);
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
