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
  const { logout } = useLogout();
  const [loader, setLoader] = useState<boolean>(false);
  const [categories, setCategories] = useState<any>([]);
  const [addNoteModalShown, showAddNoteModal, hideAddNoteModal] =
    useModalState();

  const fetchAllCategories = async () => {
    setLoader(true);
    const response: any = await getAllCatogories();
    if (response?.statusCode == 401) {
      logout();
    } else {
      setCategories(() => response?.data);

      setLoader(false);
    }
  };

  const columns = useMemo(() => CategoriesColumns({ fetchAllCategories }), []);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  return (
    <ViewContainer>
      <div style={styles.buttonWrapper}>
        <Button type="primary" onClick={() => showAddNoteModal()}>
          {BUTTON_TITLES.ADD_CATEGORY}
        </Button>
      </div>
      <Table dataSource={categories} loading={loader} columns={columns} />
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
