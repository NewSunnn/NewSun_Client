import styles from "./styles.module.css";

interface Props {
  content?: string;
}
const Container = ({ content }: Props) => {
  return (
    <>
      <div className={styles.default}>
        <p>{content}</p>
      </div>
    </>
  );
};

export default Container;
