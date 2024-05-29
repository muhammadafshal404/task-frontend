import styles from "./styles";
import Actions from "../CategoryActions";

export const CategoriesColumns = ({ fetchAllCategories }: any) => [
  {
    title: () => <div style={styles.columns}>Name</div>,
    key: "name",
    dataIndex: "name",
    render: (record: string) => {
      return <div style={styles.columns}>{record}</div>;
    },
  },
  {
    title: () => <div style={styles.columns}>Action</div>,
    key: "action",
    render: (element: any) => (
      <Actions element={element} fetchAllRecords={fetchAllCategories} />
    ),
  },
];
