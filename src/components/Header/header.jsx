import styles from "./header.module.css";
export default function header() {
  return (
    <>
    <div className={styles.header}>
        <img src="../../../public/Mask group.svg" alt="Logo" />
        <nav>
            <a>Vakansiyalar</a>
            <a>Kandidatlar</a>
            <a>Kompaniyalar</a>
            <a>Xizmatlar</a>
            <a>Ta’lim</a>
        </nav>
        <div className={styles.clas}>
            <select>
                <option value="o'zb">O`zb</option>
                <option value="rus">Rus</option>
                <option value="eng">Eng</option>
            </select>
            <button>Boshlash</button>
        </div>
    </div>
    </>
  )
}
