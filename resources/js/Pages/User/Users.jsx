import { Button, Col, Row, Table, Tag, Typography } from "antd";
import Layout from "../../Layout";
import { Inertia } from "@inertiajs/inertia";

export default function Users({ title, data }) {
    const users = data?.data;
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Role",
            dataIndex: "role",
            key: "role",
            render: (role) => <Tag>{role.name}</Tag>,
        },
        {
            title: "Action",
            key: "action",
            width: 200,
            render: (data) => (
                <Row gutter={8}>
                    <Col>
                        <Button type="primary" href={`/users/${data.id}/edit`}>
                            Edit
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            danger
                            onClick={() => Inertia.delete(`/users/${data.id}`)}
                        >
                            Delete
                        </Button>
                    </Col>
                </Row>
            ),
        },
    ];

    return (
        <Layout>
            <Row justify={"space-between"} align="middle">
                <Typography.Title>{title}</Typography.Title>
                <Button type="primary" href="/users/create">
                    + New
                </Button>
            </Row>
            <Table columns={columns} dataSource={users} rowKey="id" />
        </Layout>
    );
}
