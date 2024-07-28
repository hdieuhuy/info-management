"use client";
import { IInfo } from "@/databases/info.model";
import { createInfo, updateInfo } from "@/lib/actions/info.actions";
import { EGender } from "@/types/enums";
import { red } from "@ant-design/colors";
import { DeleteFilled, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  Collapse,
  DatePicker,
  Flex,
  Form,
  Input,
  InputNumber,
  notification,
  Popconfirm,
  Row,
  Select,
} from "antd";
import { FormProps } from "antd/lib";
import dayjs from "dayjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function InfoView({ id, data }: { id: string; data: IInfo }) {
  const form = Form.useForm()[0];

  return (
    <>
      <Form form={form} layout="vertical" initialValues={{ more_info: [{}] }}>
        <Flex vertical gap={12}>
          <Row gutter={[16, 16]}>
            <Col xl={24}>
              <Collapse
                defaultActiveKey={["1"]}
                items={[
                  {
                    key: "1",
                    label: "Thông tin cá nhân",
                    children: (
                      <Row gutter={[16, 16]}>
                        <Col xl={6}>
                          <Form.Item label="Họ tên" name="fullname">
                            {data.fullname}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Sinh ngày" name="birthday">
                            {dayjs(data.birthday).format("DD/MM/YYYY")}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Giới tính" name="gender">
                            {data.gender === EGender.MEN ? "Nam" : "Nữ"}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="CCCD/CMND" name="identification">
                            {data.identification}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nơi đăng ký khai sinh"
                            name="birth_place"
                          >
                            {data.birth_place}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Quê quán" name="country">
                            {data.country}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Dân tộc" name="nation">
                            {data.nation}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Tôn giáo" name="nationality">
                            {data.nationality}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Quốc tịch" name="religion">
                            {data.religion}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nơi thường trú của gia đình"
                            name="permanent_address"
                          >
                            {data.permanent_address}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nơi ở hiện tại của bản thân"
                            name="residence_address"
                          >
                            {data.residence_address}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Thành phần gia đình"
                            name="family_work_main"
                          >
                            {data.family_work_main}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Bản thân" name="your_work_main">
                            {data.your_work_main}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Trình độ văn hoá" name="level">
                            {data.level}/12
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Trình độ chuyên môn"
                            name="qualification"
                          >
                            {data.qualification}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Chuyên ngành đào tạo"
                            name="qualification_main"
                          >
                            {data.qualification_main}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Ngày vào Đảng CSVN"
                            name="date_join_party"
                          >
                            {dayjs(data.date_join_party).format("DD/MM/YYYY")}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Chính thức"
                            name="date_join_party_official"
                          >
                            {dayjs(data.date_join_party_official).format(
                              "DD/MM/YYYY"
                            )}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Ngày vào Đoàn TNCS Hồ Chí Minh"
                            name="date_join_group"
                          >
                            {dayjs(data.date_join_group).format("DD/MM/YYYY")}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Ngoại ngữ" name="language">
                            {data.language}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Khen thưởng" name="bonus">
                            {data.bonus}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Kỷ luật" name="discipline">
                            {data.discipline}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Nghề nghiệp" name="job">
                            {data.job}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Lương, Ngạch" name="wage">
                            {data.wage}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Bậc" name="wage_step">
                            {data.wage_step}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nơi làm việc/ Học tập"
                            name="workplace"
                          >
                            {data.workplace}
                          </Form.Item>
                        </Col>
                      </Row>
                    ),
                  },
                ]}
              ></Collapse>
            </Col>

            <Col xl={24}>
              <Collapse
                items={[
                  {
                    key: "1",
                    label: "Cha",
                    children: (
                      <Row gutter={[16, 16]}>
                        <Col xl={6}>
                          <Form.Item
                            label="Họ tên"
                            name={["father_info", "fullname"]}
                          >
                            {data.father_info.fullname}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Ngày sinh"
                            name={["father_info", "birthday"]}
                          >
                            {dayjs(data.father_info.birthday).format(
                              "DD/MM/YYYY"
                            )}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nghề nghiệp"
                            name={["father_info", "job"]}
                          >
                            {data.father_info.job}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Sống/ Mất"
                            name={["father_info", "isDead"]}
                          >
                            {data.father_info.isDead === "LIVE"
                              ? "Sống"
                              : "Còn"}
                          </Form.Item>
                        </Col>
                      </Row>
                    ),
                  },
                ]}
                defaultActiveKey={["1"]}
              ></Collapse>
            </Col>

            <Col xl={24}>
              <Collapse
                items={[
                  {
                    key: "1",
                    label: "Mẹ",
                    children: (
                      <Row gutter={[16, 16]}>
                        <Col xl={6}>
                          <Form.Item
                            label="Họ tên"
                            name={["mother_info", "fullname"]}
                          >
                            {data.mother_info.fullname}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Ngày sinh"
                            name={["mother_info", "birthday"]}
                          >
                            {dayjs(data.mother_info.birthday).format(
                              "DD/MM/YYYY"
                            )}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nghề nghiệp"
                            name={["mother_info", "job"]}
                          >
                            {data.mother_info.job}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Sống/ Mất"
                            name={["mother_info", "isDead"]}
                          >
                            {data.mother_info.isDead === "LIVE"
                              ? "Sống"
                              : "Còn"}
                          </Form.Item>
                        </Col>
                      </Row>
                    ),
                  },
                ]}
                defaultActiveKey={["1"]}
              ></Collapse>
            </Col>

            <Col xl={24}>
              <Collapse
                items={[
                  {
                    key: "1",
                    label: "Vợ/ Chồng",
                    children: (
                      <Row gutter={[16, 16]}>
                        <Col xl={6}>
                          <Form.Item
                            label="Họ tên"
                            name={["couple_info", "fullname"]}
                          >
                            {data.mother_info.fullname}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Ngày sinh"
                            name={["couple_info", "birthday"]}
                          >
                            {dayjs(data.couple_info.birthday).format(
                              "DD/MM/YYYY"
                            )}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nghề nghiệp"
                            name={["couple_info", "job"]}
                          >
                            {data.couple_info.job}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Bản thân đã có"
                            name={["couple_info", "son_count"]}
                          >
                            {data.couple_info.son_count}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Cha mẹ có nhiêu người con?"
                            name={["family_info", "son_count"]}
                          >
                            {data.family_info.son_count}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Số lượng con trai"
                            name={["family_info", "boy_count"]}
                          >
                            {data.family_info.boy_count}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Số lượng con gái"
                            name={["family_info", "girl_count"]}
                          >
                            {data.family_info.girl_count}
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Bản thân là con thứ"
                            name={["family_info", "your_step"]}
                          >
                            {data.family_info.your_step}
                          </Form.Item>
                        </Col>
                      </Row>
                    ),
                  },
                ]}
                defaultActiveKey={["1"]}
              ></Collapse>
            </Col>
          </Row>

          <Row>
            <Col xl={24}>
              <Collapse
                defaultActiveKey={["1"]}
                items={[
                  {
                    key: "1",
                    label: "Thông tin huyết thống",
                    children: (
                      <Row gutter={[16, 16]}>
                        {data.more_info.map(
                          (
                            { lineage, fullname, year_of_birth, description },
                            index
                          ) => (
                            <Col key={`view-${index}`} xl={8}>
                              <Card
                                style={{
                                  borderStyle: "dashed",
                                }}
                              >
                                <Row gutter={[8, 8]}>
                                  <Col xl={8}>
                                    <Form.Item label="Huyết thống">
                                      {lineage}
                                    </Form.Item>
                                  </Col>

                                  <Col xl={8}>
                                    <Form.Item label="Họ tên">
                                      {fullname}
                                    </Form.Item>
                                  </Col>

                                  <Col xl={8}>
                                    <Form.Item label="Năm sinh">
                                      {dayjs(year_of_birth).format("YYYY")}
                                    </Form.Item>
                                  </Col>

                                  <Col xl={24}>
                                    <Form.Item label="Tiểu sử">
                                      {description}
                                    </Form.Item>
                                  </Col>
                                </Row>
                              </Card>
                            </Col>
                          )
                        )}
                      </Row>
                    ),
                  },
                ]}
              ></Collapse>
            </Col>
          </Row>

          <Row justify={"end"} gutter={[10, 10]}>
            <Col>
              <Link href="/">
                <Button style={{ width: 80, height: 40 }}>Trở lại</Button>
              </Link>
            </Col>
          </Row>
        </Flex>
      </Form>
    </>
  );
}

export default InfoView;
