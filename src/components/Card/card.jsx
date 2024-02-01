import "../Fonts/fonts.css"
import styles from "./card.module.css";
export default function card() {
  return (
    <>
    <div className={styles.cards}>
    <h1 className={styles.h1}>Kompaniya ma’lumotlari</h1>
    <p className={styles.p}>Kompaniya haqidagi ma’lumotlarni kiriting</p>
    <div className={styles.img}>
    <img src="../../../public/Ellipse 1.svg" alt="Img" />
    <h4>Yuklash</h4>
    </div>
    <div className={styles.input}>
    <form >
        <label>Kompaniya nomi <span>*</span></label>
        <input type="text" placeholder="Kompaniya nomi" />
    </form>

    <form>
        <label>Email <span>*</span></label>
        <input type="text" placeholder="Email" />
    </form>

    <form>
        <label>Telefon raqami <span>*</span></label>
        <input type="number" placeholder="UZ +9989" />
    </form>

    <form>
        <label>Linklar <span>*</span></label>
        <div className={styles.icon}>
        <a><img src="../../../public/fluent_earth-32-regular.svg" alt="" /></a>
        <a><img src="../../../public/ion_logo-instagram.svg" alt="" /></a>
        <a><img src="../../../public/ic_baseline-telegram.svg" alt="" /></a>
        <a><img src="../../../public/mingcute_facebook-line.svg" alt="" /></a>
        <a><img src="../../../public/iconoir_github.svg" alt="" /></a>
        </div>
    </form>


    <div className={styles.row}>
    <form >
        <label>Davlat <span>*</span></label>
        <select>
            <option className="bold" value="">Davlat</option>
            <option value="Uzbekiston">Uzbekiston</option>
            <option value="Rossiya">Rossiya</option>
            <option value="AQSH">AQSH</option>
            </select>
    </form>

    <form>
    <label>Shahar <span>*</span></label>
        <select>
            <option className="bold" value="">Shahar</option>
            <option value="Uzbekiston">Fargona</option>
            <option value="Rossiya">Samarqand</option>
            <option value="AQSH">Buxoro</option>
        </select>
    </form>
    </div>
    <form>
        <label>Hodimlar soni <span>*</span></label>
        <input type="number" placeholder="Hodimlar soni" />
    </form>

    <form>
        <label>Izoh <span>*</span></label>
        <textarea placeholder="  Kompaniya haqida izoh qoldiring" cols="30" rows="10"></textarea>
        </form>

    <div className={styles.btnrow}><button>Ortga</button> <button>Keyingisi</button></div>
    </div>
    </div>
    </>
  )
}
