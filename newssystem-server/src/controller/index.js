
exports.home = async (ctx)=>{
    console.log('home');
    ctx.body = {
        text: 'hello world'
    };
}