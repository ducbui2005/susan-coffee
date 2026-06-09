import ProductList from "@/app/admin/product/page";
import clientPromise from "@/libs/mongodb";

export async function GET(request){ // trả về ds sản phẩm
try{
    const client = await clientPromise;
    const db = client.db();
    const productList = await db.collection("products").find({}).toArray();
    return Response.json(productList)
} catch(error){
    console.log(error)
    return Response.json({error:'Lỗi kết nối cơ sở dữ liệu'})
}
}
export function POST(request){

}