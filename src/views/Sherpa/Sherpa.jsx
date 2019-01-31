import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import FormInputs from 'components/FormInputs/FormInputs.jsx';
import Radio from 'components/CustomRadio/CustomRadio.jsx';
import SimpleCheckbox from 'components/CustomCheckbox/SimpleCheckbox.jsx';
import Button from 'components/CustomButton/CustomButton.jsx';

import { PanelHeader } from "components";

class Sherpa extends React.Component {
  render() {
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col md={12}>
              <Card>

                <CardBody>
                  <div>
                    <h3>
                      Let's get started. Tell us about your preferences{" "}
                    </h3>

                  </div>


                  <div>

                    <FormInputs
    ncols = {["col-md-5 pr-1" , "col-md-3 px-1" , "col-md-4 pl-1"]}
    proprieties = {[
        // {
        //     label : "Company",
        //     inputProps : {
        //         type : "text",
        //         disabled: true,
        //         defaultValue: "Creative Code Inc."
        //     }
        // },
        {
            label : "Name",
            inputProps : {
                type : "text",
                placeholder: "Joe Blow"
            }
        },
        {
            label : "Email address",
            inputProps : {
                type : "email",
                placeholder: "Email"
            }
        },
        {
            label : "Phone number",
            inputProps : {
                type : "Phone",
                placeholder: "Phone"
            }
        },

    ]}
/>
<div>
Select you gender:
<Radio
    label="Male"
    inputProps={{name:"radio",value:"male"}}
/>
<Radio
    label="Female"
    inputProps={{name:"radio",value:"female"}}
/>

What are your food preferences?
<SimpleCheckbox
    label="Plant Based"
    inputProps={{defaultChecked: true}}
/>
<SimpleCheckbox
    label="Animal Based"
/>


What are you interested today?
<SimpleCheckbox
    label="7 day meal plan"
/>
<SimpleCheckbox
    label="Keto Shopping List"
/>

<Button color="primary" size="lg">Submit</Button>

</div>

                  </div>


                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Sherpa;
