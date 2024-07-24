"use client";
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
  Popconfirm,
  Row,
  Select,
  Space,
} from "antd";
import React from "react";

function InfoForm() {
  const form = Form.useForm()[0];

  function onFinish(values) {}

  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish}>
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
                          <Form.Item
                            label="Họ tên"
                            rules={[
                              {
                                required: true,
                                message: "Họ tên không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Sinh ngày"
                            rules={[
                              {
                                required: true,
                                message: "Sinh ngày không được trống",
                              },
                            ]}
                          >
                            <DatePicker
                              placeholder="Chọn ngày"
                              format={"DD/MM/YYYY"}
                              style={{ width: "100%" }}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Giới tính"
                            rules={[
                              {
                                required: true,
                                message: "Giới tính không được trống",
                              },
                            ]}
                          >
                            <Select
                              options={[
                                { value: EGender.MEN, label: "Nam" },
                                { value: EGender.WOMEN, label: "Nữ" },
                              ]}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="CCCD/CMND"
                            rules={[
                              {
                                required: true,
                                message: "CCCD/CMND không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nơi đăng ký khai sinh"
                            rules={[
                              {
                                required: true,
                                message:
                                  "Nơi đăng ký khai sinh không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Quê quán"
                            rules={[
                              {
                                required: true,
                                message: "Quê quán không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Dân tộc"
                            rules={[
                              {
                                required: true,
                                message: "Dân tộc không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Tôn giáo"
                            rules={[
                              {
                                required: true,
                                message: "Tôn giáo không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Quốc tịch"
                            rules={[
                              {
                                required: true,
                                message: "Quốc tịch không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nơi thường trú của gia đình"
                            rules={[
                              {
                                required: true,
                                message:
                                  "Nơi thường trú của gia đình không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Thành phần gia đình"
                            rules={[
                              {
                                required: true,
                                message: "Thành phần gia đình không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Bản thân"
                            rules={[
                              {
                                required: true,
                                message: "Bản thân không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Bản thân"
                            rules={[
                              {
                                required: true,
                                message: "Bản thân không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Trình độ văn hoá"
                            rules={[
                              {
                                required: true,
                                message: "Trình độ văn hoá không được trống",
                              },
                            ]}
                          >
                            <Select
                              options={Array.from(Array(10).keys()).map(
                                (item) => ({
                                  label: `${item}`,
                                  value: item,
                                })
                              )}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Trình độ chuyên môn">
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Chuyên ngành đào tạo">
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Ngày vào Đảng CSVN">
                            <DatePicker
                              placeholder="Chọn ngày"
                              format={"DD/MM/YYYY"}
                              style={{ width: "100%" }}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Chính thức">
                            <DatePicker
                              placeholder="Chọn ngày"
                              format={"DD/MM/YYYY"}
                              style={{ width: "100%" }}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Ngày vào  Đoàn TNCS Hồ Chí Minh">
                            <DatePicker
                              placeholder="Chọn ngày"
                              format={"DD/MM/YYYY"}
                              style={{ width: "100%" }}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Ngày vào  Đoàn TNCS Hồ Chí Minh">
                            <DatePicker
                              placeholder="Chọn ngày"
                              format={"DD/MM/YYYY"}
                              style={{ width: "100%" }}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Ngoại ngữ">
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Khen thưởng"
                            rules={[
                              {
                                required: true,
                                message: "Khen thưởng không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Kỷ luật"
                            rules={[
                              {
                                required: true,
                                message: "Kỷ luật không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nghề nghiệp"
                            rules={[
                              {
                                required: true,
                                message: "Nghề nghiệp không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Lương, Ngạch">
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Bậc">
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Nơi làm việc/ Học tập">
                            <Input />
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
                            rules={[
                              {
                                required: true,
                                message: "Họ tên không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Ngày sinh"
                            rules={[
                              {
                                required: true,
                                message: "Ngày sinh không được trống",
                              },
                            ]}
                          >
                            <DatePicker
                              placeholder="Chọn ngày"
                              format={"DD/MM/YYYY"}
                              style={{ width: "100%" }}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nghề nghiệp"
                            rules={[
                              {
                                required: true,
                                message: "Nghề nghiệp không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Sống/ Mất"
                            rules={[
                              {
                                required: true,
                                message: "Sống/ Mất không được trống",
                              },
                            ]}
                          >
                            <Select
                              options={[
                                { label: "Sống", value: "LIVE" },
                                { label: "Mất", value: "DIED" },
                              ]}
                            />
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
                            rules={[
                              {
                                required: true,
                                message: "Họ tên không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Ngày sinh"
                            rules={[
                              {
                                required: true,
                                message: "Ngày sinh không được trống",
                              },
                            ]}
                          >
                            <DatePicker
                              placeholder="Chọn ngày"
                              format={"DD/MM/YYYY"}
                              style={{ width: "100%" }}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nghề nghiệp"
                            rules={[
                              {
                                required: true,
                                message: "Nghề nghiệp không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Sống/ Mất"
                            rules={[
                              {
                                required: true,
                                message: "Sống/ Mất không được trống",
                              },
                            ]}
                          >
                            <Select
                              options={[
                                { label: "Sống", value: "LIVE" },
                                { label: "Mất", value: "DIED" },
                              ]}
                            />
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
                            rules={[
                              {
                                required: true,
                                message: "Họ tên không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Ngày sinh"
                            rules={[
                              {
                                required: true,
                                message: "Ngày sinh không được trống",
                              },
                            ]}
                          >
                            <DatePicker
                              placeholder="Chọn ngày"
                              format={"DD/MM/YYYY"}
                              style={{ width: "100%" }}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nghề nghiệp"
                            rules={[
                              {
                                required: true,
                                message: "Nghề nghiệp không được trống",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Bản thân đã có">
                            <InputNumber style={{ width: "100%" }} min={1} />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Cha mẹ có nhiêu người con?">
                            <InputNumber style={{ width: "100%" }} min={1} />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Số lượng con trai">
                            <InputNumber style={{ width: "100%" }} min={1} />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Số lượng con gái">
                            <InputNumber style={{ width: "100%" }} min={1} />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Bản thân là con thứ">
                            <InputNumber style={{ width: "100%" }} min={1} />
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
                      <Form.List name="users">
                        {(fields, { add, remove }) => (
                          <>
                            <Row gutter={[16, 16]}>
                              {fields.map(({ key, name, ...restField }) => (
                                <Col key={key} xl={12}>
                                  <Card
                                    style={{
                                      borderStyle: "dashed",
                                    }}
                                    title={
                                      <Row justify={"end"}>
                                        <Popconfirm
                                          title="Bạn có chắc chắn muốn xoá?"
                                          onConfirm={() => remove(name)}
                                          okText="Có"
                                          cancelText="Không"
                                        >
                                          <Button
                                            type="text"
                                            icon={
                                              <DeleteFilled
                                                style={{ color: red.primary }}
                                              />
                                            }
                                          ></Button>
                                        </Popconfirm>
                                      </Row>
                                    }
                                  >
                                    <Row gutter={[8, 8]}>
                                      <Col xl={8}>
                                        <Form.Item
                                          {...restField}
                                          label="Huyết thống"
                                          name={[name, "lineage"]}
                                          rules={[
                                            {
                                              required: false,
                                              message:
                                                "Huyết thống không được rỗng",
                                            },
                                          ]}
                                        >
                                          <Select placeholder="Huyết thống" />
                                        </Form.Item>
                                      </Col>

                                      <Col xl={8}>
                                        <Form.Item
                                          {...restField}
                                          label="Họ tên"
                                          name={[name, "fullname"]}
                                          rules={[
                                            {
                                              required: true,
                                              message: "Họ Tên không được rỗng",
                                            },
                                          ]}
                                        >
                                          <Input placeholder="Họ Tên" />
                                        </Form.Item>
                                      </Col>

                                      <Col xl={8}>
                                        <Form.Item
                                          {...restField}
                                          label="Ngày sinh"
                                          name={[name, "birthday"]}
                                          rules={[
                                            {
                                              required: true,
                                              message: "Ngày sinh",
                                            },
                                          ]}
                                        >
                                          <DatePicker
                                            placeholder="Chọn ngày"
                                            format={"DD/MM/YYYY"}
                                            style={{ width: "100%" }}
                                          />
                                        </Form.Item>
                                      </Col>

                                      <Col xl={24}>
                                        <Form.Item
                                          {...restField}
                                          name={[name, "description"]}
                                          label="Tiểu sử"
                                          rules={[
                                            {
                                              required: true,
                                              message: "Missing last name",
                                            },
                                          ]}
                                        >
                                          <Input.TextArea
                                            rows={3}
                                            autoSize
                                            placeholder="Tiểu sử"
                                          />
                                        </Form.Item>
                                      </Col>
                                    </Row>
                                  </Card>
                                </Col>
                              ))}
                            </Row>
                            <Form.Item style={{ marginTop: 16 }}>
                              <Button
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                              >
                                Thêm mới
                              </Button>
                            </Form.Item>
                          </>
                        )}
                      </Form.List>
                    ),
                  },
                ]}
              ></Collapse>
            </Col>
          </Row>

          <Row justify={"end"} gutter={[10, 10]}>
            <Col>
              <Button style={{ width: 80, height: 40 }}>Trở lại</Button>
            </Col>

            <Col>
              <Button
                style={{ width: 80, height: 40 }}
                type="primary"
                htmlType="submit"
              >
                Lưu
              </Button>
            </Col>
          </Row>
        </Flex>
      </Form>
    </>
  );
}

export default InfoForm;
