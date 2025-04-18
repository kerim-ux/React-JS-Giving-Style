import './StyleApp.css'
const StyleApp=()=>{
    const Styles={
        Theme1:{
            color:'blue',
            border:'2px solid red'
        },
        Theme2:{
            color:'blue',
            border:'2px solid green'
        }
    }
    return(
        <div>
            <p style={{color:'red', background:'yellow'}}>Inline Style</p>
            <p className='ortada'>External Style</p>
            <p className='red ortada'>External Style2</p>
            <p style={Styles.Theme1}>Internal Style Theme1</p>
            <p style={Styles.Theme2}>Internal Style Theme2</p>
        </div>
    )
}
export default StyleApp