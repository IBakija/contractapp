import { articleData } from '../../constants/articleData';
import { determineStatus } from '../../constants/determineStatus';
import style from './Article.module.scss';

interface Props {
    item: articleData;
}

const Article: React.FC<Props> = (props) => {
    const { item } = props;
    let status = '';

    status = determineStatus(item.status);

    return (
        <div className={style.contractCard} key={item.id}>
            <h3 className={style.contractHolder}>{item.naziv}</h3>
            <div className={style.contractGrid}>
                <p className={style.contractKey}>dobavljac: </p>
                <p className={style.contractValue}>{item.dobavljac}</p>

                <p className={style.contractKey}>Status: </p>
                <p className={`${style.contractStatus} ${status}`}>
                    {item.status}
                </p>
            </div>
        </div>
    );
};

export default Article;
