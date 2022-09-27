const PizzaImage = ({pizza}) => (
    <>
        <img src="/img/pain.png" alt="pain"/>
        {pizza.ingredients.map((ingredient, i)=>(
            <img key={ingredient.nom} src={`/${ingredient.url}`} alt={ingredient.nom}/>
        ))}
    </>
)

export default PizzaImage;