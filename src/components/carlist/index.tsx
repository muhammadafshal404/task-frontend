import styles from "./styles";
import CustomModal from "../Modal";
import { Button, Table } from "antd";
import { CarsColumns } from "./config";
import { getAllCars } from "../../apis/car.api";
import { ViewContainer } from "../ViewContainer";
import { useLogout } from "../../hooks/useLogout";
import { useState, useMemo, useEffect } from "react";
import { useModalState } from "../../hooks/useModalState";
import { BUTTON_TITLES, TITLES } from "../../utils/constant";
import CarForm from "../car";

export default function CarList() {
  const { logout } = useLogout();
  const [cars, setCars] = useState<any>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [addNoteModalShown, showAddNoteModal, hideAddNoteModal] =
    useModalState();

  const fetchAllCars = async () => {
    setLoader(true);
    const response: any = await getAllCars();
    if (response?.statusCode == 401) {
      logout();
    } else {
      setCars(() =>
        response?.data?.map?.((car: any) => ({
          ...car,
          category: car?.category?.name,
        }))
      );

      setLoader(false);
    }
  };

  const columns = useMemo(() => CarsColumns({ fetchAllCars }), []);

  useEffect(() => {
    fetchAllCars();
  }, []);

  return (
    <ViewContainer>
      <div style={styles.buttonWrapper}>
        <Button type="primary" onClick={() => showAddNoteModal()}>
          {BUTTON_TITLES.ADD_CAR}
        </Button>
      </div>
      <Table dataSource={cars} loading={loader} columns={columns} />
      <CustomModal
        title={TITLES.ADD_CAR}
        centered={true}
        open={addNoteModalShown}
        onCancel={hideAddNoteModal}
        footer={null}
        childern={
          <CarForm
            hideAddNoteModal={hideAddNoteModal}
            fetchAllCars={fetchAllCars}
          />
        }
      />
    </ViewContainer>
  );
}
