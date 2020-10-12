import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { global } from '../styles/Global.css';
import { Formik } from 'formik';
import * as Yup from 'yup';
import FlatButton from '../shared/FlatButton'

const ReviewSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, 'Too Short!')
      .required('Required'),
    body: Yup.string()
      .min(8, 'Too Short!')
      .required('Required'),
    rating: Yup.string()
      .required('Required')
      .test('is-num-1-5','Reting must be number 1 - 5', (value) => {
        return parseInt(value) < 6 && parseInt(value) > 0
      }),
  });

export default function FormReview({addReview}) {
  return (
    <View style={global.container}>
        <Formik
            initialValues={{title:'',body:'',rating:''}}
            validationSchema={ReviewSchema}
            onSubmit={(values, action) => {
                action.resetForm();
                addReview(values);
            }}
        >
            {(props) => (
            <View>
                <TextInput
                    style={global.input}
                    placeholder="Review Title"
                    onChangeText={props.handleChange('title')}
                    onBlur={props.handleBlur('title')}
                    value={props.values.title}
                />
                <Text style={global.errorTextInput}>{props.touched.title && props.errors.title}</Text>
                <TextInput
                    multiline
                    style={global.input}
                    placeholder="Review Body"
                    onChangeText={props.handleChange('body')}
                    onBlur={props.handleBlur('body')}
                    value={props.values.body}
                />
                <Text style={global.errorTextInput}>{props.touched.body && props.errors.body}</Text>
                <TextInput
                    style={global.input}
                    placeholder="Rating (1-5)"
                    onChangeText={props.handleChange('rating')}
                    onBlur={props.handleBlur('rating')}
                    value={props.values.rating}
                    keyboardType='numeric'
                />
                <Text style={global.errorTextInput}>{props.touched.rating && props.errors.rating}</Text>
                {/* <Button onPress={props.handleSubmit} title="Submit" /> */}
                <FlatButton text="submit" onPress={props.handleSubmit} />
            </View>
            )}
        </Formik>

    </View>
  )
}