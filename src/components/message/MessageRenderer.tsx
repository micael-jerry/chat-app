import styles from "../../styles/styles.module.css";
import { ReceiveMessage } from './ReceiveMessage'
import { SendMessage } from './SendMessage'

export const MessageRenderer = () => {
    return (
        <div
            id={styles.droite}
            className="pt-3 pe-3"
            data-mdb-perfect-scrollbar="true"
        >
            <ReceiveMessage />
            <SendMessage />
        </div>
    )
}
