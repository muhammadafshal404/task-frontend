import styles from "./styles";
import CustomModal from "../Modal";
import { Button, Table } from "antd";
import CategoryForm from "../category";
import { CategoriesColumns } from "./config";
import { ViewContainer } from "../ViewContainer";
import { useLogout } from "../../hooks/useLogout";
import { useState, useMemo, useEffect } from "react";
import { useModalState } from "../../hooks/useModalState";
import { getAllCatogories } from "../../apis/category.api";
import { BUTTON_TITLES, TITLES } from "../../utils/constant";

export default function CategoryList() {
  const paginationConfig: any = {
    current: 1,
    page: 1,
    pageSize: 2,
  };
  const { logout } = useLogout();
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState<boolean>(false);
  const [categories, setCategories] = useState<any>([]);
  const [addNoteModalShown, showAddNoteModal, hideAddNoteModal] =
    useModalState();
  const [pagination, setPagination] = useState(paginationConfig);

  const fetchAllCategories = async (queryParams?: string) => {
    setLoader(true);
    const response: any = await getAllCatogories(
      queryParams
        ? queryParams
        : `pageNo=${paginationConfig?.current}&perPage=${paginationConfig?.pageSize}`
    );
    if (response?.statusCode == 401) {
      logout();
    } else {
      setCategories(() => response?.data?.rows);
      setCount(() => response?.data?.count);
      setLoader(false);
    }
  };

  const columns = useMemo(() => CategoriesColumns({ fetchAllCategories }), []);

  useEffect(() => {
    fetchAllCategories(
      `pageNo=${pagination?.current}&perPage=${pagination?.pageSize}`
    );
  }, []);

  return (
    <ViewContainer>
      <div style={styles.buttonWrapper}>
        <Button type="primary" onClick={() => showAddNoteModal()}>
          {BUTTON_TITLES.ADD_CATEGORY}
        </Button>
      </div>
      <Table
        onChange={(paginationParams: any) => {
          setPagination(() => paginationParams);
          fetchAllCategories(
            `pageNo=${paginationParams?.current}&perPage=${paginationParams?.pageSize}`
          );
        }}
        dataSource={categories}
        loading={loader}
        columns={columns}
        pagination={{ ...pagination, total: count }}
      />
      <CustomModal
        title={TITLES.ADD_CATEGORY}
        centered={true}
        open={addNoteModalShown}
        onCancel={hideAddNoteModal}
        footer={null}
        childern={
          <CategoryForm
            hideAddNoteModal={hideAddNoteModal}
            fetchAllCategories={fetchAllCategories}
          />
        }
      />
    </ViewContainer>
  );
}