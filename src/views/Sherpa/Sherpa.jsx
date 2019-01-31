import React from "react";
import { Card, CardHeader, CardBody, Row, Col } from "reactstrap";
import FormInputs from 'components/FormInputs/FormInputs.jsx';
import { Radio } from 'components';
import { Checkbox } from 'components';

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
                    <h2>
                      Tell us about your preference{" "}
                    </h2>

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
<Radio
    label="Unchecked"
    inputProps={{name:"radio",value:"unchecked"}}
/>


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
