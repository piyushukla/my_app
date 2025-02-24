import {create} from 'zustand';


type AuthState = {
    email:string,
    password:string;
    setAuth:(email:string,password:string)=>void;
    logout:()=>void;
}

type SignupUser = {
    email:string,
    name:string,
    password:string,
    setSignup:(email:string,password:string,name:string)=>void;
}

export const useAuthStore = create<AuthState>((set) => ({
    email:"",
    password: "",
    
    // Set Login State
    setLogin: (email: any, password: any,name: any) => set({ email, password }),
  
    // Clear State on Logout
    logout: () => set({ email: '', password: '' })
  }));


  export const SignupUser = create<SignupUser>((set)=>({
    email:'',
    password:'',
    name:'',

    setSignup:(email,password,name)=>set({email,password,name})

  }))
