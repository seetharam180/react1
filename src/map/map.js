const listItem=()=>{
    const fruitList =["apple","banana","orange","grapes"]
    return (
        <div>
            {
                fruitList.map((eachFruit) => {
                    return (
                        <h4>{eachFruit}</h4>
                    );
                })
            }
        </div>
    );
}
export default listItem;