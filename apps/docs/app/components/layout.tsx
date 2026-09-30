import { Sidebar } from "../_components/Sidebar";
import styles from "./layout.module.css";

export default function ComponentsLayout({
  children,
}: LayoutProps<"/components">) {
  return (
    <div className={styles.shell}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
