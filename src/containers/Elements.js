

import React, {Component} from 'react';
import {Button, Form, Label, Row, Col} from 'reactstrap';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {updateScanList} from '../actions/Actions'; // new import
import {updateSingleScan} from '../actions/Actions'; // new import
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import uuid from  'uuid';
import {buildTable} from '../components/IPTable';

const webPage = 'Scan';
const sentence1 = "The first sentence.";
const sentence2 = "Please fill out the form below and click on \"Submit.\"";
const sentence3 = "The third sentence.";
const sentence4 = "The forth sentence.";
export const defaultText = 'IPs: e.g. 1.1.1.1, 2.2.2.2, 3.3.3.3';

class Elements extends Component {

    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(singleScanText, key){
        return this.props.updateSingleScan(singleScanText, key);
    }

    handleSubmit(event){
        event.preventDefault();

        let thereIsNothingToSubmit = true; // Flag checking if there is any text to "Submit" on a click
        for(let scanSet of this.props.scanSets){
            console.log("running for loop");
            console.log("scanSet scan: " + scanSet.scan)
            console.log("scanSet key: " + scanSet.key)
            if(scanSet.scan.length > 0){
                thereIsNothingToSubmit = false;
            }
        }
        console.log("flag = " + thereIsNothingToSubmit);
        if(thereIsNothingToSubmit){
            return;
        }

        for(let scanSet of this.props.scanSets){
            let singleScanArray = scanSet.scan.split(",").map(ip => ip.trim());
            if(scanSet.scan.length > 0 && singleScanArray.length > 0){
                this.props.updateSingleScan('', scanSet.key);
                this.props.updateScanList(singleScanArray, scanSet.key);
            }
        }
    }

    buildTextArea(scanSet){
        console.log("running buildTextArea");
        console.log(scanSet.scan + "    " + scanSet.key);
        return(
            <Row key={scanSet.key}>
                <Col>
                    <textarea value={scanSet.scan} placeholder={defaultText} style={{width: "80%"}} onChange={(event) => this.handleChange(event.target.value, scanSet.key)}/>
                </Col>
            </Row>
        )
    }

  render() {
      console.log("logging scan sets: " + this.props.scanSets);
    return (
        <div>
            <div className = {"Content"}>
        <div>
          <h1>
            {webPage}
          </h1>
          <div><Label>{sentence1} {sentence2} {sentence3} {sentence4}</Label>
          </div>
          <Form onSubmit={this.handleSubmit}>
              {this.props.scanSets.map((scanSet) => this.buildTextArea(scanSet), this.props.scanSets)}
            <Button size="lg" >Submit</Button>
          </Form>
            <div style={{display:'flex', alignItems:'first-baseline', paddingTop:'20px'}} key={uuid.v4()}>
                {this.props.scanSets.map((scanSet) => buildTable(scanSet.scanList))}
            </div>
        </div>
            </div>
            <div className={"Footer"}>
                <Footer />
            </div >
        </div>
    );
  }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({updateScanList, updateSingleScan}, dispatch);
}

function mapStateToProps(state){
    return {
        scanSets: state.scanState.scanSets
    }
}

// css tip: style={{backgroundColor: "blue", color:"black"}} backGround color changes button color, color changes text color

export default connect(mapStateToProps, mapDispatchToProps)(Elements);