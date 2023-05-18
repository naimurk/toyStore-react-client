import { useContext } from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';

const PostToy = () => {
    const { user } = useContext(AuthContex)

    const handleAddPost = (event)=> {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const toyname = form.toyname.value

        const addedProduct = {
            name, email, price, quantity, photo , rating, category, toyname
        }

        fetch('http://localhost:5000/postedToy', {
            method : "post", 
            headers : {
                'content-type': 'Application/json'
            },
            body : JSON.stringify(addedProduct)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data);
            if(data?.insertedId){
                alert('posted successfully')
            }
        })
    }


    return (
        <div>
            <form onSubmit={handleAddPost}  >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>
                    {/* 1 */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' defaultValue={user?.email} readOnly placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">toy name</span>
                        </label>
                        <input type="text" name='toyname'  placeholder="Toy Name" className="input input-bordered" />
                    </div>
                    {/* 2 */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered" />

                    </div>
                    {/* 3 */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">category</span>
                        </label>
                        <input type="text" name='category' placeholder="category" className="input input-bordered" />

                    </div>
                    {/* 4 */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" />

                    </div>
                    {/* 5 */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">photo url</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo" className="input input-bordered" />

                    </div>
                    {/* 6 */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating out of 5</span>
                        </label>
                        <input type="text" name='rating' placeholder="rating" className="input input-bordered" />

                    </div>
                    {/* 7  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">quantity</span>
                        </label>
                        <input type="text" name='quantity' placeholder="quantity" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">description</span>
                        </label>
                        <input type="text" name='description' placeholder="description" className="input input-bordered" />

                    </div>
                </div>


                <div className="form-control mt-6">

                    <input className="btn btn-warning" type="submit" value="Add Post Toy" />
                </div>
            </form>
        </div>
    );
};

export default PostToy;