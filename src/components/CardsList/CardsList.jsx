import styles from './CardsList.module.css';

function CardsList(props) {

    return (

        <section className="list">

            <h2>{props.listTitle}</h2>

            {

                props.dataArray?.map(actor => {

                    return (

                        <div key={`card-${actor.id}`} className={styles.card}>

                            <div>
                                <img className={styles.cardImage} src={actor.image} alt={`${actor.name} photo`} />
                            </div>

                            <div className={styles.informationContainer}>

                                <section className={styles.field}>
                                    <h3 className={styles.cardTitle}>{actor.name}</h3>
                                </section>

                                <section className={styles.field}>
                                    <h6 className={styles.fieldName}>Year of birth:</h6>
                                    <span>{actor.birth_year}</span>
                                </section>

                                <section className={styles.field}>
                                    <h6 className={styles.fieldName}>Nationality:</h6>
                                    <span>{actor.nationality}</span>
                                </section>

                                <section className={styles.field}>
                                    <h6 className={styles.fieldName}>Biography:</h6>
                                    <span>{actor.biography}</span>
                                </section>

                                <section className={styles.field}>
                                    <h6 className={styles.fieldName}>Awards:</h6>
                                    <span>{actor.awards.join(', ')}</span>
                                </section>

                            </div>

                        </div>

                    );

                })

            }

        </section>

    );

}

export default CardsList;