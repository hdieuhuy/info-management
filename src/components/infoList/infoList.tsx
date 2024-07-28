/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useEffect, useState } from "react";
import { Button, Col, Flex, notification, Popconfirm, Row, Table } from "antd";
import type { TableColumnsType } from "antd";
import {
  DeleteFilled,
  EditFilled,
  ExportOutlined,
  EyeFilled,
  PlusOutlined,
} from "@ant-design/icons";
import { blue, green, orange, red } from "@ant-design/colors";
import Link from "next/link";
import { IInfo } from "@/databases/info.model";
import dayjs from "dayjs";
import { deleteInfo } from "@/lib/actions/info.actions";
import { EUserRole } from "@/types/enums";
import { isEmpty } from "lodash";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";
import { IUser } from "@/databases/user.model";

function InfoList({ data }: { data: IInfo[] }) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState<Partial<IUser>>({});

  if (Array.isArray(data) && data.length <= 0) return null;

  useEffect(() => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";

    setCurrentUser(user);
  }, []);

  useEffect(() => {
    if (isEmpty(currentUser)) return router.push("/sign-up");
  }, []);

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

  const exportToExcel = () => {
    const formatData = data.map((item) => ({
      "Họ tên": item.fullname,
      "Sinh ngày": dayjs(item.birthday).format("DD/MM/YYYY"),
      "Giới tính": item.gender === "MEN" ? "Nam" : "Nữ",
      "CCCD/CMND": item.identification,
      "Nơi đăng ký khai sinh": item.birth_place,
      "Quê Quán": item.country,
      "Dân tộc": item.nation,
      "Tôn giáo": item.nationality,
      "Quốc tịch": item.religion,
      "Nơi thường trú của gia đình": item.permanent_address,
      "Nơi ở hiện tại của bản thân": item.residence_address,
      "Thành phần gia đình": item.family_work_main,
      "Bản thân": item.your_work_main,
      "Trình độ văn hoá": `${item.level}/12`,
      "Trình độ chuyên môn": item.qualification,
      "Chuyên ngành đào tạo": item.qualification_main,
      "Ngày vào Đảng CSVN": dayjs(item.date_join_party).format("DD/MM/YYYY"),
      "Ngày vào Đoàn TNCS Hồ Chí Minh": dayjs(item.date_join_group).format(
        "DD/MM/YYYY"
      ),
      "Ngoại ngữ": item.language,
      "Khen thưởng": item.bonus,
      "Kỷ luật": item.discipline,
      "Nghề nghiệp": item.job,
      "Lương, Ngạch": item.wage,
      Bậc: item.wage_step,
      "Nơi làm việc/ Học tậ": item.workplace,

      "Họ tên (Cha)": item.father_info.fullname,
      "Sinh Ngày (Cha)": dayjs(item.father_info.birthday).format("DD/MM/YYYY"),
      "Công việc (Cha)": item.father_info.job,
      "Sống/Mất (Cha)": item.father_info.isDead,

      "Họ tên (Mẹ)": item.mother_info.fullname,
      "Sinh Ngày (Mẹ)": dayjs(item.mother_info.birthday).format("DD/MM/YYYY"),
      "Công việc (Mẹ)": item.mother_info.job,
      "Sống/Mất (Mẹ)": item.mother_info.isDead,

      "Họ tên (Vợ/Chồng)": item.couple_info.fullname,
      "Sinh Ngày (Vợ/Chồng)": dayjs(item.couple_info.birthday).format(
        "DD/MM/YYYY"
      ),
      "Công việc (Vợ/Chồng)": item.couple_info.job,
      "Bản thân đã có": item.couple_info.son_count,

      "Cha mẹ có nhiêu người con?": item.family_info.son_count,
      "Số lượng con trai": item.family_info.boy_count,
      "Số lượng con gái": item.family_info.girl_count,
      "Bản thân là con thứ": item.family_info.your_step,
    }));

    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(formatData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "export-data.xlsx");
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
      render: (text, record) => (
        <Link href={`/view/${record?._id}`}>{text}</Link>
      ),
    },
    {
      title: "Ngày Sinh",
      dataIndex: "birthday",
      key: "birthday",
      render: (text) => dayjs(text).format("DD/MM/YYYY"),
    },
    {
      title: "Giới tính",
      dataIndex: "gender",
      key: "gender",
      render: (text) => (text === "MEN" ? "Nam" : "Nữ"),
      // sorter: (a, b) => a.address.length - b.address.length,
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
      // sorter: (a, b) => a.address.length - b.address.length,
      render: (text) => `${text}/12`,
    },
    {
      title: "Người tạo",
      dataIndex: "create_by",
      key: "create_by",
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => (text ? dayjs(text).format("DD/MM/YYYY") : null),
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

          {currentUser.role === EUserRole.ADMIN && (
            <Link href={`/${record._id || ""}`}>
              <Button
                type="text"
                icon={<EditFilled style={{ color: orange.primary }} />}
              ></Button>
            </Link>
          )}

          {currentUser.role === EUserRole.ADMIN && (
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
          )}
        </Flex>
      ),
    },
  ];

  return (
    <Row gutter={[16, 16]}>
      <Col xl={24}>
        <Row justify={"end"} gutter={[12, 12]}>
          <Col>
            <Button
              type="primary"
              style={{
                borderColor: green.primary,
                backgroundColor: green.primary,
              }}
              icon={<ExportOutlined />}
              onClick={exportToExcel}
            >
              Xuất file excel
            </Button>
          </Col>

          <Col>
            <Link href="create">
              <Button type="primary" icon={<PlusOutlined />}>
                Thêm mới
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>

      <Col xl={24}>
        <Table
          columns={columns}
          dataSource={data.map((item) => ({
            ...item,
            key: item._id,
            _id: item._id,
          }))}
          pagination={false}
        />
      </Col>
    </Row>
  );
}

export default InfoList;
