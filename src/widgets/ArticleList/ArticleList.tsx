import Article from '../../entities/Article/Article';
import style from './ArticleList.module.scss';
import { articles } from '../../shared/constants/articles';

interface Props {
    contractId: number | undefined;
}

const ArticleList: React.FC<Props> = (props) => {
    const { contractId } = props;

    return (
        <div className={style.contractList}>
            {articles
                .filter((a) => a.id === contractId)
                .map((article) => {
                    return <Article item={article} />;
                })}
        </div>
    );
};

export default ArticleList;
