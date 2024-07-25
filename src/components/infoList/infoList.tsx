"use client";

import React, { useRef, useState } from "react";
import {
  Button,
  Col,
  Flex,
  Input,
  message,
  notification,
  Popconfirm,
  Row,
  Space,
  Table,
} from "antd";
import type { InputRef, TableColumnsType, TableColumnType } from "antd";
import { FilterDropdownProps } from "antd/es/table/interface";
import {
  DeleteFilled,
  EditFilled,
  EyeFilled,
  PlusOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { blue, orange, red } from "@ant-design/colors";
import Link from "next/link";
import { IInfo } from "@/databases/info.model";
import dayjs from "dayjs";
import { deleteInfo } from "@/lib/actions/info.actions";

function InfoList({ data }: { data: IInfo[] }) {
  console.log({ data });

  if (Array.isArray(data) && data.length <= 0) return null;

  const onDelete = async (id: string) => {
    try {
      const res = await deleteInfo({ id });

      if (res?.success) {
        notification.success({
          message: res?.message,
        });
      } else {
        notification.error({
          message: res?.message,
        });
      }
    } catch (error) {}
  };

  const columns: TableColumnsType<IInfo> = [
    {
      title: "#",
      dataIndex: "#",
      key: "#",
      render: (_, __, i) => i + 1,
    },
    {
      title: "Họ Tên",
      dataIndex: "fullname",
      key: "fullname",
      sorter: (a: any, b: any) => a.fullname.length - b.fullname.length,
    },
    {
      title: "Ngày Sinh",
      dataIndex: "birthday",
      key: "birthday",
      render: (text) => dayjs(text).format("DD/MM/YYYY"),
    },
    {
      title: "Nơi thường trú của gia đình",
      dataIndex: "permanent_address",
      key: "permanent_address",
      // sorter: (a, b) => a.address.length - b.address.length,
    },
    {
      title: "CCCD/CMND",
      dataIndex: "identification",
      key: "identification",
      // sorter: (a, b) => a.address.length - b.address.length,
    },
    {
      title: "Trình độ văn hoá",
      dataIndex: "level",
      key: "level",
      width: "15%",
      // sorter: (a, b) => a.address.length - b.address.length,
      render: (text) => `${text}/12`,
    },
    {
      title: "Hành động",
      dataIndex: "action",
      key: "action",
      fixed: "right",
      align: "center",
      width: "8%",
      render: (_, record) => (
        <Flex justify="center" align="center" gap={4}>
          <Link href={`/view/${record._id || ""}`}>
            <Button
              type="text"
              icon={<EyeFilled style={{ color: blue.primary }} />}
            ></Button>
          </Link>

          <Link href={`/${record._id || ""}`}>
            <Button
              type="text"
              icon={<EditFilled style={{ color: orange.primary }} />}
            ></Button>
          </Link>

          <Popconfirm
            title="Delete the task"
            description="Are you sure to delete this task?"
            onConfirm={() => onDelete(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              type="text"
              icon={<DeleteFilled style={{ color: red.primary }} />}
            ></Button>
          </Popconfirm>
        </Flex>
      ),
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col xl={24}>
        <Row justify={"end"}>
          <Link href="create">
            <Button type="primary" icon={<PlusOutlined />}>
              Thêm mới
            </Button>
          </Link>
        </Row>
      </Col>

      <Col xl={24}>
        <Table
          columns={columns}
          dataSource={data.map((item) => ({ ...item, _id: item._id }))}
          pagination={false}
        />
      </Col>
    </Row>
  );
}

export default InfoList;
