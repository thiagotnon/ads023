import React, { useRef } from 'react';
import { Button, TextInput, Text, View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function FormFormik() {
  const matricula = useRef();
  const senha = useRef();
  const schema = yup.object().shape({
    matricula: yup
      .number()
      .required('Matrícula obrigatória')
      .positive('Matrícula deve ser maior que zero')
      .integer('Matrícula deve ser um número inteiro'),
    senha: yup
      .string()
      .required('Senha obrigatória')
      .min(6, 'Senha menor que 6 caracteres'),
  });

  return (
    <Formik initialValues={{ matricula: '', senha: '' }}
      validationSchema={schema}
      onSubmit={values => { alert('Sucesso!'); }}>
      {({ values, handleChange, handleSubmit, errors }) => (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <TextInput style={{ padding: 10 }}
            ref={matricula}
            placeholder="Matrícula"
            keyboardType="number-pad"
            onChangeText={handleChange('matricula')}
          />
          {errors?.matricula && (<Text style={{ color: 'red' }}>
            {errors?.matricula}</Text>)}
          <TextInput style={{ padding: 10 }}
            ref={senha}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={handleChange('senha')}
          />
          {errors?.senha && (<Text style={{ color: 'red' }}>
            {errors?.senha}</Text>)}
          <Button title="Entrar" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}
