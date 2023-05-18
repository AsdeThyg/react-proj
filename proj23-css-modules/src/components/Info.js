import './Info.css'
import styles from './Info.module.css'

console.log(styles)
// {
//     info :  "Info_info__RJb-L"
//     myOtherBtn : "Info_myOtherBtn__C24Ri"
// }

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from Info Component</h1>
      <h2>Info Heading</h2>
      <button className="my-btn">Info Click</button>
      <button className={styles.myOtherBtn}>Btn with local CSS</button>
    </div>
  )
}
export default Info
