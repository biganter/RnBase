/**
 * Created by kurosaki on 2018/12/1.testpaper.png
 */
import React, { Component } from 'react';
import {  Container,Icon,Button} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {
    Text,
    View,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';

const { width,height } = Dimensions.get('window')
const styles = {
    container: {
        flex: 1,
        paddingTop:14,
        paddingBottom:14,
        borderBottomColor:"#f0f0f0",
        borderBottomWidth:1
    },
    imgbac:{
        width:108,
        height:80,
        alignSelf:"center",
        justifySelf:"center"
    }
}

//name:"5411医疗服务",
//    curnum:1,
//    totalnum:3,
//    addr:"河桥街道",
//    type:"医疗服务"

export default class SchoolExamItem extends React.PureComponent{
    render() {
        let {item} = this.props;
        let style1 = ()=>{
            return(
                <Grid style={styles.container}>
                    <Col size={1.5}>
                       <ImageBackground style={styles.imgbac} source={require("../../../../assets/images/testpaper.png")}>
                       </ImageBackground>
                    </Col>
                    <Col style={{width:width*0.60,paddingLeft:0.04*width,height:80}}>
                        <Row size={6.5}>
                            <Col size={1}>
                                <Text style={{fontSize:16,color:"#333"}} numberOfLines={2}>
                                    {item.exam}
                                </Text>
                            </Col>
                            <Col size={1}>
                                <Text style={{fontSize:14,color:"#999"}} style={{textAlign:"right"}} numberOfLines={1}>
                                    {item.time}
                                </Text>
                            </Col>
                        </Row>
                        <Row size={3.5}>
                            <Col size={1}></Col>
                            <Col size={1}>
                            <Button rounded full style={{borderRadius:600,width:width*0.30-7,height:28,backgroundColor:"#DD5144"}}>
                                <Text numberOfLines={1} style={{color:"#ffffff"}}>
                                    开始考试
                                </Text>
                            </Button>
                            </Col>
                        </Row>
                    </Col>
                </Grid>
            )
        }


        return (
            <TouchableNativeFeedback>
                <View>
                    {
                        style1()
                    }
                </View>
            </TouchableNativeFeedback>


        );
    }
}