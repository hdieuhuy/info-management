/* eslint-disable react-hooks/exhaustive-deps */
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

import { useRouter } from "next/navigation";
import { EUserRole } from "@/types/enums";
import { isEmpty } from "lodash";
import { IUser } from "@/databases/user.model";

function InfoForm({ id, data }: { id: string; data: IInfo }) {
  const [currentUser, setCurrentUser] = useState<Partial<IUser>>({});

  const form = Form.useForm()[0];
  const router = useRouter();
  const isTypeCreate = id === "create";

  useEffect(() => {
    const user = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";

    setCurrentUser(user);
  }, []);

  useEffect(() => {
    if (isEmpty(currentUser)) return router.push("/sign-up");
  }, []);

  useEffect(() => {
    if (currentUser.role === EUserRole.USER && !isTypeCreate) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (isTypeCreate) return;

    const _values = {
      ...data,
      birthday: data.birthday ? dayjs(data.birthday) : null,
      date_join_party: data.date_join_party
        ? dayjs(data.date_join_party)
        : null,
      date_join_party_official: data.date_join_party_official
        ? dayjs(data.date_join_party_official)
        : null,
      date_join_group: data.date_join_group
        ? dayjs(data.date_join_group)
        : null,
      father_info: {
        ...data.father_info,
        birthday: data.father_info.birthday
          ? dayjs(data.father_info.birthday)
          : null,
      },
      mother_info: {
        ...data.mother_info,
        birthday: data.mother_info.birthday
          ? dayjs(data.mother_info.birthday)
          : null,
      },
      couple_info: {
        ...data.couple_info,
        birthday: data.mother_info.birthday
          ? dayjs(data.mother_info.birthday)
          : null,
      },

      more_info: data.more_info.map((item) => ({
        ...item,
        year_of_birth: item.year_of_birth ? dayjs(item.year_of_birth) : null,
      })),
    };

    form.setFieldsValue(_values);
  }, []);

  const onFinish: FormProps<IInfo>["onFinish"] = async (values) => {
    try {
      const inputs = {
        ...values,
        birthday: values.birthday
          ? dayjs(values.birthday).format("YYYY-MM-DD")
          : null,
        date_join_party: values.date_join_party
          ? dayjs(values.date_join_party).format("YYYY-MM-DD")
          : null,
        date_join_party_official: values.date_join_party_official
          ? dayjs(values.date_join_party_official).format("YYYY-MM-DD")
          : null,
        date_join_group: values.date_join_group
          ? dayjs(values.date_join_group)
          : null,
        father_info: {
          ...values.father_info,
          birthday: values.father_info.birthday
            ? dayjs(values.father_info.birthday).format("YYYY-MM-DD")
            : null,
        },
        mother_info: {
          ...values.mother_info,
          birthday: values.mother_info.birthday
            ? dayjs(values.mother_info.birthday).format("YYYY-MM-DD")
            : null,
        },
        couple_info: {
          ...values.couple_info,
          birthday: values.mother_info.birthday
            ? dayjs(values.mother_info.birthday).format("YYYY-MM-DD")
            : null,
        },

        more_info: values.more_info.map((item) => ({
          ...item,
          year_of_birth: item.year_of_birth
            ? dayjs(item.year_of_birth).format("YYYY-MM-DD")
            : null,
        })),
      };

      if (isTypeCreate) {
        const res = await createInfo({
          ...inputs,
          create_by: currentUser.name,
          create_at: dayjs().format("YYYY-MM-DD"),
        } as any);

        if (res?.success) {
          form.resetFields();
          notification.success({
            message: "Tạo thông tin thành công",
          });
        } else {
          notification.error({
            message: res?.message,
          });
        }
      } else {
        const res = await updateInfo(
          {
            ...inputs,
            id,
            create_by: data.create_by,
            created_at: data.created_at,
            update_by: currentUser.name,
            update_at: dayjs().format("YYYY-MM-DD"),
          } as any,
          "/"
        );
        if (res?.success) {
          notification.success({
            message: res.message,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ more_info: [{}] }}
      >
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
                            name="fullname"
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
                            name="birthday"
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
                            name="gender"
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
                            name="identification"
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
                            name="birth_place"
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
                            name="country"
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
                            name="nation"
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
                            name="nationality"
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
                            name="religion"
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
                            name="permanent_address"
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
                            label="Nơi ở hiện tại của bản thân"
                            name="residence_address"
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
                            name="family_work_main"
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
                            name="your_work_main"
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
                            name="level"
                            rules={[
                              {
                                required: true,
                                message: "Trình độ văn hoá không được trống",
                              },
                            ]}
                          >
                            <Select
                              options={Array.from(Array(13).keys()).map(
                                (item) => ({
                                  label: `${item}`,
                                  value: item,
                                })
                              )}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Trình độ chuyên môn"
                            name="qualification"
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Chuyên ngành đào tạo"
                            name="qualification_main"
                          >
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Ngày vào Đảng CSVN"
                            name="date_join_party"
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
                            label="Chính thức"
                            name="date_join_party_official"
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
                            label="Ngày vào Đoàn TNCS Hồ Chí Minh"
                            name="date_join_group"
                          >
                            <DatePicker
                              placeholder="Chọn ngày"
                              format={"DD/MM/YYYY"}
                              style={{ width: "100%" }}
                            />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Ngoại ngữ" name="language">
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Khen thưởng"
                            name="bonus"
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
                            name="discipline"
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
                            name="job"
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
                          <Form.Item label="Lương, Ngạch" name="wage">
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item label="Bậc" name="wage_step">
                            <Input />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Nơi làm việc/ Học tập"
                            name="workplace"
                          >
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
                            name={["father_info", "fullname"]}
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
                            name={["father_info", "birthday"]}
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
                            name={["father_info", "job"]}
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
                            name={["father_info", "isDead"]}
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
                            name={["mother_info", "fullname"]}
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
                            name={["mother_info", "birthday"]}
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
                            name={["mother_info", "job"]}
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
                            name={["mother_info", "isDead"]}
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
                            name={["couple_info", "fullname"]}
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
                            name={["couple_info", "birthday"]}
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
                            name={["couple_info", "job"]}
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
                            label="Bản thân đã có"
                            name={["couple_info", "son_count"]}
                          >
                            <InputNumber style={{ width: "100%" }} min={1} />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Cha mẹ có nhiêu người con?"
                            name={["family_info", "son_count"]}
                          >
                            <InputNumber style={{ width: "100%" }} min={1} />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Số lượng con trai"
                            name={["family_info", "boy_count"]}
                          >
                            <InputNumber style={{ width: "100%" }} min={1} />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Số lượng con gái"
                            name={["family_info", "girl_count"]}
                          >
                            <InputNumber style={{ width: "100%" }} min={1} />
                          </Form.Item>
                        </Col>

                        <Col xl={6}>
                          <Form.Item
                            label="Bản thân là con thứ"
                            name={["family_info", "your_step"]}
                          >
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
                      <Form.List name="more_info">
                        {(fields, { add, remove }) => (
                          <>
                            <Row gutter={[16, 16]}>
                              {fields.map(({ key, name, ...restField }) => (
                                <Col key={key} xl={8}>
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
                                            danger
                                            icon={<DeleteFilled />}
                                          >
                                            Xoá
                                          </Button>
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
                                              required: true,
                                              message:
                                                "Huyết thống không được rỗng",
                                            },
                                          ]}
                                        >
                                          <Select
                                            options={[
                                              { label: "Cha", value: "Cha" },
                                              { label: "Mẹ", value: "Mẹ" },
                                              { label: "Anh", value: "Anh" },
                                              { label: "Cô", value: "Cô" },
                                              { label: "Dì", value: "Dì" },
                                              { label: "Chú", value: "Chú" },
                                              { label: "Bác", value: "Bác" },
                                              { label: "Chị", value: "Chị" },
                                            ]}
                                            placeholder="Huyết thống"
                                          />
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
                                          label="Năm sinh"
                                          name={[name, "year_of_birth"]}
                                          rules={[
                                            {
                                              required: true,
                                              message: "Ngày sinh",
                                            },
                                          ]}
                                        >
                                          <DatePicker
                                            placeholder="Chọn ngày"
                                            format={"YYYY"}
                                            picker="year"
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
              <Link href="/">
                <Button style={{ width: 80, height: 40 }}>Trở lại</Button>
              </Link>
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
