import{j as v,u as f,d as n,x as h,o as g,h as x,i as l,k as u,y as k,z as y,a as s,A as b,b as w,p as B,B as E}from"./index-Dl1616DY.js";import N from"./AuthenticationLayout-DO1oYryL.js";const T=s("p",null,"Nhập địa chỉ email của bạn",-1),V=["error","error-text"],C={class:"auth-form-suggest"},M=s("p",null,"Bạn đã có tài khoản?",-1),K={class:"auth-form-action"},R=["disabled"],q={__name:"SignUpEmail",setup(S,{expose:d}){const c=v(),m=f(),t=n(m.query.email||"");d({email:t});const e=n(!1),o=n(""),i=async()=>{try{e.value=!0;const a=await E.getByEmail(t.value);e.value=!1,a&&(o.value="Email đã được sử dụng, vui lòng sử dụng email khác")}catch(a){e.value=!1,console.log(a),a.response.status===404?c.push({name:"sign-up-password",params:{email:t.value}}):o.value=a.response.data.message}};return(a,r)=>{const p=h("router-link");return g(),x(N,{loading:e.value},{title:l(()=>[u(" Tạo tài khoản ")]),greeting:l(()=>[T]),form:l(()=>[k(s("md-outlined-text-field",{class:"auth-form-text-field",type:"email",label:"Email",name:"email","onUpdate:modelValue":r[0]||(r[0]=_=>t.value=_),onKeyup:b(i,["enter"]),error:o.value&&!e.value?"":void 0,"error-text":!e.value&&o.value},null,40,V),[[y,t.value]]),s("div",C,[M,w(p,{to:{name:"sign-in-email"}},{default:l(()=>[u("Đăng nhập")]),_:1})]),s("div",K,[s("md-filled-button",{onClick:B(i,["prevent"]),disabled:e.value?"disabled":void 0},"Tiếp theo",8,R)])]),_:1},8,["loading"])}}};export{q as default};
