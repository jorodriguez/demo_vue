
/* eslint-disable */
import URL from "../helpers/Urls";

export default {
  name: "Usuario",
  props: { },
  data() {
    return {
      listaUsuario:[],
      mensaje:""
    };
  },
  mounted() {   
    console.log("URL USUARIO "+URL.RECURSO_USUARIO);    
  },
  methods: {
    cargarUsuarios() {
      console.log("@cargando lista de usuarios");  
      this.$http.get(URL.RECURSO_USUARIO).then(
        result => {
          console.log("En el login");
          this.listaUsuario = result.data;    
          this.mensaje = "Usuarios actualizados a las "+(new Date());     
        },
        error => {                    
            this.mensaje = ("Error "+error);                    
        }
      );
    }
  }
};
