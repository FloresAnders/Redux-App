import  { setGifs }  from  "@/root/redux/reducers/gif-reducer/gifReducer";
import  { DispatchType }  from  "@/root/redux/reducers/cart-reducer/cartReducer";
import  { gifProvider }  from  "@/root/redux/provider/gif/gif.provider";

export  const  startSetGif  =  (searchTerm:  string):  any  =>  {
	return  async (dispatch:  DispatchType) => {
		const  gifList  =  await  gifProvider(searchTerm);
		dispatch(setGifs(gifList  || []));
	};
};

