import React from 'react'
import {
  Box,
  Button,
  Container,
  Columns,
  Column,
  Control,
  Field,
  FieldBody,
  Input,
  Title
} from 'bloomer'

const Welcome = () => {
  return (
    <>
      <Columns style={{ height: '100%' }}>
        <Column></Column>
        <Column isSize="1/3" hasTextAlign="centered" style={{paddingTop: '200px'}}>
          <Title isSize="1">Welcome, Ben!</Title>
          <div>
            <Box>
              <Field isHorizontal>
                <FieldBody>
                  <Field style={{width: '100%'}}>
                    <Control isExpanded>
                      <Input type="text" placeholder="Search the web" isSize="large" />
                    </Control>
                  </Field>
                  <Field>
                    <Control>
                      <Button isColor="primary" isSize="large">Submit</Button>
                    </Control>
                  </Field>
                </FieldBody>
              </Field>
            </Box>
          </div>
        </Column>
        <Column></Column>
      </Columns>
    </>
  )
}

export default Welcome
