import clientPromise from "@/libs/mongodb";

export async function POST(request){
    try{
    const client = await clientPromise;
    const db = client.db();

    const body = await request.json()
    const {name,table_id,order_items, total} = body

    if(!name || !table_id || !order_items || !total){
        return Response.json({error:"Thiếu thông tin đơn hàng"},{status:400})
    }
    const newOrder ={
        ...body,
        created_at: new Date()
    }

    const result = await db.collection("orders").insertOne(newOrder)

    return Response.json({message:"Đơn hàng đã được tạo mới thành công!"})
} catch(error){
    console.log(error)
    return Response.json({error:'Lỗi kết nối cơ sở dữ liệu'})
}

}