import styles from "./Section.module.scss";

export default function Section({ payload }) {
  const {
    title,
    articleTitle,
    articleText,
    articleTextSecond,
    bigImage,
    smallImage,
  } = payload;
  const sectionClasses = `${styles.section} ${styles[`${bigImage}`]}`;
  const gridClasses = `${styles.grid} ${styles[`${smallImage}`]}
  }`;

  return (
    <section className={sectionClasses}>
      <div className='container'>
        <h2 className='title'>{title}</h2>
        <div className={gridClasses}>
          <div className={`${styles.gridCeil} ${styles.firstCeil}`}>
            <h3 className={"article-title"}>{articleTitle}</h3>
            <p className={"article-text"}>{articleText}</p>
            <p className={"article-text"}>{articleTextSecond}</p>
          </div>
          <div className={`${styles.gridCeil} ${styles.secondCeil}`}>
            <h3 className={"article-title"}>{articleTitle}</h3>
            <p className={"article-text"}>{articleText}</p>
            <p className={"article-text"}>{articleTextSecond}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
