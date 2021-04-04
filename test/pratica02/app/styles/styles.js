import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#313131',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderColor: 'red',
  },
  titleArea: {
    width: '90%',
    marginBottom: 50,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 15,
    color: '#fff',
    textAlign: 'left',
  },

  button: {
    width: '90%',
    height: 60,
    borderRadius: 6,
    backgroundColor: '#00a5f4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  textButton: {
    color: '#fff',
    fontSize: 18,
  },
  inputArea: {
    flexDirection: 'row',
    width: '90%',
    alignItems: 'center',
    height: 50,
    marginBottom: 30,
    borderBottomColor: 'red',
    borderBottomWidth: 1,
    borderBottomColor: '#4E4E4E',
  },
  label: {
    color: '#4E4E4E',
    width: '90%',
    letterSpacing: 4,
  },
  input: {
    width: '85%',
    padding: 8,
    fontSize: 18,
    color: '#fff',
  },
  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
