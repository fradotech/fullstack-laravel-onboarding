import { Table, Typography } from "antd";
import Layout from "../../Layout";

export default function Users({ data }) {
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
    ];

    return (
        <Layout>
            <Typography.Title>Users</Typography.Title>
            <Table columns={columns} dataSource={data} rowKey="id" />
        </Layout>
    );
}
