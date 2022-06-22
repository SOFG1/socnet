"use strict";(self.webpackChunksocnet=self.webpackChunksocnet||[]).push([[826],{6826:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var r=a(5861),s=a(885),o=a(7757),n=a.n(o),l=a(2791),i={Profile:"Profile_Profile__72WZQ",user:"Profile_user__IPBVM",left:"Profile_left__757fi",right:"Profile_right__3YYRY",avatar:"Profile_avatar__28yBI",name:"Profile_name__XHB5K",about:"Profile_about__Fu2hs",avatarBox:"Profile_avatarBox__62vhZ",avatarLabel:"Profile_avatarLabel__tORke",avatarInput:"Profile_avatarInput__Txtts",avatarError:"Profile_avatarError__27VGn",preloader:"Profile_preloader__x2vIF",rotate:"Profile_rotate__nghYB",title:"Profile_title__cDrI-",form:"Profile_form__kkSZz",textarea:"Profile_textarea__uC2wd",btn:"Profile_btn__xkJ1m",post:"Profile_post__6eHwe",postAvatar:"Profile_postAvatar__5HJ-x",text:"Profile_text__lnKJA",postBox:"Profile_postBox__z6w7U",likeBtn:"Profile_likeBtn__akHmO",likes:"Profile_likes__8C57l",followbtn:"Profile_followbtn__M19+A"},c=a(364),u={Form:"ProfileForm_Form__lr65t",editEnableBtn:"ProfileForm_editEnableBtn__f1dYi",box:"ProfileForm_box__mLrhv",title:"ProfileForm_title__udn3w",value:"ProfileForm_value__JwS4S",job:"ProfileForm_job__MDIrV",label:"ProfileForm_label__Klnm+",checkbox:"ProfileForm_checkbox__e0z5R",contacts:"ProfileForm_contacts__9YBeO",contactsTitle:"ProfileForm_contactsTitle__1bwAv",textarea:"ProfileForm_textarea__UQJEL",editDisableBtn:"ProfileForm_editDisableBtn__+viFn",submitBtn:"ProfileForm_submitBtn__suD+Q",error:"ProfileForm_error__TVbT6",wrapper:"ProfileForm_wrapper__xPJFc"},f=a(1694),d=a.n(f),m=a(4667),_=a(184),h=function(e){var t=e.contactTitle,a=e.contactValue,r=e.editMode,o=(0,l.useState)(a||""),n=(0,s.Z)(o,2),i=n[0],c=n[1];return(0,_.jsxs)("div",{className:u.box,children:[(0,_.jsxs)("p",{className:u.title,children:[t," :"]}),r?(0,_.jsx)("input",{type:"text",value:i,onChange:function(e){return c(e.target.value)},name:t,placeholder:"Your ".concat(t),className:u.input}):(0,_.jsx)("a",{className:u.value,href:a,target:"_blank",children:a})]})},p=function(e){var t=e.profile,a=e.editable,o=e.editProfile,i=e.setProfileInfo,c=(0,l.useState)(!1),f=(0,s.Z)(c,2),p=f[0],x=f[1],v=(0,l.useState)(!1),b=(0,s.Z)(v,2),g=b[0],j=b[1],P=(0,l.useState)([]),N=(0,s.Z)(P,2),k=N[0],w=N[1],F=(0,l.useState)(t.fullName||""),Z=(0,s.Z)(F,2),S=Z[0],y=Z[1],I=(0,l.useState)(t.aboutMe||""),A=(0,s.Z)(I,2),B=A[0],C=A[1],D=(0,l.useState)(t.lookingForAJob),J=(0,s.Z)(D,2),E=J[0],L=J[1],U=(0,l.useState)(t.lookingForAJobDescription||""),M=(0,s.Z)(U,2),T=M[0],Y=M[1],q=function(){var e=(0,r.Z)(n().mark((function e(t){var a,r;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={fullName:t.target[0].value,aboutMe:t.target[1].value,lookingForAJob:t.target[2].checked,lookingForAJobDescription:t.target[3].value,contacts:{facebook:t.target[4].value,website:t.target[5].value,vk:t.target[6].value,twitter:t.target[7].value,instagram:t.target[8].value,youtube:t.target[9].value,github:t.target[10].value,mainLink:t.target[11].value}},j(!0),e.next=4,o(a);case 4:r=e.sent,j(!1),0===r.resultCode&&(w([]),x(!1),i(a)),0!==r.resultCode&&w(r.messages);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,_.jsxs)("form",{className:u.Form,onSubmit:function(e){e.preventDefault(),q(e)},children:[k.map((function(e){return(0,_.jsx)("div",{className:u.error,children:e})})),(0,_.jsxs)("div",{className:u.box,children:[(0,_.jsx)("p",{className:u.title,children:"name: "}),p?(0,_.jsx)("input",{value:S,onChange:function(e){return y(e.target.value)},name:"fullName",placeholder:"Your name",className:u.input}):(0,_.jsx)("p",{className:u.value,children:t.fullName})]}),(0,_.jsxs)("div",{className:u.box,children:[(0,_.jsx)("p",{className:u.title,children:"About me: "}),p?(0,_.jsx)("textarea",{value:B,onChange:function(e){return C(e.target.value)},name:"aboutMe",placeholder:"About you",className:u.textarea}):(0,_.jsx)("p",{className:u.value,children:t.aboutMe})]}),!p&&(0,_.jsxs)("div",{className:u.box,children:[(0,_.jsx)("p",{className:u.title,children:"User Id: "}),(0,_.jsx)("p",{className:u.value,children:t.userId})]}),(0,_.jsx)("div",{className:u.box,children:p?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("label",{className:d()(u.title,u.label),htmlFor:"job",children:"Looking for a job:"}),(0,_.jsx)("input",{checked:E,value:E,onChange:function(e){return L(e.target.checked)},className:u.checkbox,name:"lookingForAJob",id:"job",type:"checkbox"})]}):(0,_.jsx)("p",{className:u.job,children:t.lookingForAJob?"Looking for a job":null})}),(0,_.jsxs)("div",{className:u.box,children:[(0,_.jsx)("p",{className:u.title,children:"Skills: "}),p?(0,_.jsx)("textarea",{value:T,onChange:function(e){return Y(e.target.value)},name:"lookingForAJobDescription",placeholder:"Your skills",className:u.textarea}):(0,_.jsx)("p",{className:u.value,children:t.lookingForAJobDescription})]}),(0,_.jsx)("div",{className:u.contacts,children:Object.keys(t.contacts).map((function(e){return(t.contacts[e]||p)&&(0,_.jsx)(h,{contactTitle:e,contactValue:t.contacts[e],editMode:p},e)}))}),(0,_.jsx)(m.Z,{isFetching:g&&p}),p&&!g&&(0,_.jsx)("button",{type:"submit",className:u.submitBtn,children:"Save changes"}),!p&&a&&(0,_.jsx)("button",{onClick:function(){return x(!0)},className:u.editEnableBtn,children:"Enable Edit mode"}),p&&(0,_.jsx)("button",{onClick:function(){return x(!1)},className:u.editDisableBtn,children:"Disable Edit mode"})]})},x=a(8308),v=a(1153),b="Status_statusBox__Bqyz8",g="Status_input__b+NJN",j="Status_editable__DhYzb",P="Status_status__rJ2po",N="Status_error__wjohR",k="Status_empty__YIKZ-",w=function(e){var t=(0,l.useState)(""),a=(0,s.Z)(t,2),r=a[0],o=a[1],n=(0,l.useState)(!1),i=(0,s.Z)(n,2),c=i[0],u=i[1],f=(0,l.useState)(!1),d=(0,s.Z)(f,2),m=d[0],h=d[1];(0,l.useEffect)((function(){o(e.status)}),[e]);return(e.status||!e.readOnly)&&(0,_.jsxs)("div",{className:e.readOnly?b:"".concat(b," ").concat(j),onClick:function(){e.readOnly||u((function(e){return!e}))},children:[c?(0,_.jsx)("input",{className:g,type:"text",value:r,onChange:function(e){o(e.target.value),h(!(0,v.qB)(e.target.value))},onBlur:function(t){var a=(0,v.qB)(t.target.value);a&&(o(e.status),u((function(e){return!e}))),e.status!==r&&a&&e.changeStatus(t.target.value),(0,v.qB)(t.target.value)||h(!0)},autoFocus:!0}):(0,_.jsxs)("p",{className:P,children:[r,0===r.length&&!e.readOnly&&(0,_.jsx)("span",{className:k,children:"Click to set the status..."})]}),m&&(0,_.jsx)("p",{className:N,children:"Status must container letters or numbers and not exceed 300 characters"})]})},F=function(e){return(0,_.jsxs)("div",{className:i.user,children:[(0,_.jsxs)("div",{className:i.left,children:[(0,_.jsx)("img",{src:e.profile.photos.large||x,alt:"User Avatar",className:i.avatar}),!e.owner&&e.profile.followed&&(0,_.jsx)("button",{onClick:function(){return e.unfollowUser(e.profile.userId)},className:i.followbtn,disabled:e.followDisabled,children:"Unfollow"}),!e.owner&&!1===e.profile.followed&&(0,_.jsx)("button",{onClick:function(){return e.followUser(e.profile.userId)},disabled:e.followDisabled,className:i.followbtn,children:"Follow"}),e.owner&&(0,_.jsxs)("form",{className:i.avatarForm,children:[e.avatarError&&(0,_.jsx)("p",{className:i.avatarError,children:"Something went wrong... Please, try again"}),(0,_.jsxs)("div",{className:i.avatarBox,children:[(0,_.jsxs)("label",{htmlFor:"avatar",className:i.avatarLabel,children:["Change avatar",(0,_.jsx)("input",{className:i.avatarInput,placeholder:"Choose avatar",accept:".jpg, .jpeg, .png",onInput:function(t){return e.updateAvatar(t.target.files[0])},type:"file",name:"avatar",id:"avatar",disabled:e.avatarLoading})]}),e.avatarLoading&&(0,_.jsx)("span",{className:i.preloader})]})]})]}),(0,_.jsxs)("div",{className:i.right,children:[(0,_.jsx)("h1",{className:i.name,children:e.profile.fullName}),(0,_.jsx)(w,{status:e.profile.status,readOnly:e.myId!==e.profile.userId,changeStatus:e.changeStatus}),(0,_.jsx)(p,{editProfile:e.editProfile,profile:e.profile,editable:e.owner,setProfileInfo:e.setProfileInfo})]})]})},Z=a(6139),S=a(704),y=a(9875),I=(0,v.bq)(500),A=(0,S.Z)({form:"posts"})((function(e){var t=e.handleSubmit;return(0,_.jsxs)("form",{className:i.form,onSubmit:t,children:[(0,_.jsx)(Z.Z,{placeholder:"Write your post here...",className:i.textarea,name:"post",component:y.Z,validate:[I]}),(0,_.jsx)("button",{className:i.btn,type:"submit",children:"Add Post"})]})})),B=function(e){return(0,_.jsxs)("div",{className:i.post,children:[(0,_.jsx)("img",{src:x,alt:"user avatar",className:i.postAvatar}),(0,_.jsx)("p",{className:i.text,children:e.post.text}),(0,_.jsxs)("div",{className:i.postBox,children:[(0,_.jsx)("button",{onClick:function(){return e.likePost(e.post.id)},className:i.likeBtn,children:"Like"}),(0,_.jsxs)("p",{className:i.likes,children:[e.post.likes," Likes"]})]})]})},C=l.memo((function(e){return(0,_.jsxs)("div",{className:i.Posts,children:[(0,_.jsx)("h2",{className:i.title,children:"MyPosts"}),(0,_.jsx)(A,{onSubmit:function(t){return e.addPost(t.post)}}),e.posts.map((function(t){return(0,_.jsx)(B,{post:t,likePost:e.likePost},t.id)})).reverse()]})})),D=a(3268),J=a(7781),E=a(6407),L=a(6871),U=a(5153),M=(0,J.qC)(D.Z,(0,c.$j)((function(e){return{profile:e.profile.profile,followDisabled:e.profile.followDisabled,posts:e.profile.posts,myId:e.auth.profile.id,isFetching:e.profile.isFetching}}),{setProfileInfo:E.mr,editProfile:E.Rk,setProfile:E.Xc,changeStatus:E.sH,addPost:E.Q_,likePost:E.T9,followUser:E.qh,unfollowUser:E.$1,updateAvatar:E.Pt}))((function(e){var t=parseInt((0,L.UO)()["*"],10);(0,l.useEffect)((function(){(!e.profile||e.profile.userId!==(t||e.myId))&&(t||e.myId)&&e.setProfile(t||e.myId)}),[e.myId,t]);var a=(0,l.useState)(!1),o=(0,s.Z)(a,2),c=o[0],u=o[1],f=(0,l.useState)(!1),d=(0,s.Z)(f,2),h=d[0],p=d[1],x=function(){var t=(0,r.Z)(n().mark((function t(a){var r;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=8;break}return u(!0),t.next=4,e.updateAvatar(a);case 4:r=t.sent,u(!1),0!==r&&p(!0),0===r&&p(!1);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return(0,_.jsxs)("div",{className:i.Profile,children:[e.isFetching&&(0,_.jsx)(m.Z,{isFetching:e.isFetching}),e.profile&&(0,_.jsx)(F,{setProfileInfo:e.setProfileInfo,editProfile:e.editProfile,avatarLoading:c,avatarError:h,owner:!t,myId:e.myId,profile:e.profile,changeStatus:e.changeStatus,followUser:e.followUser,unfollowUser:e.unfollowUser,followDisabled:e.followDisabled,updateAvatar:x}),e.profile&&!t&&(0,_.jsx)(U.Z,{children:(0,_.jsx)(C,{posts:e.posts,addPost:e.addPost,likePost:e.likePost})})]})}))},9875:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(1413),s=a(5987),o=(a(2791),"Textarea_container__8xwgg"),n="Textarea_error__Zh8jH",l=a(184),i=["input","meta"],c=function(e){var t=e.input,a=e.meta,c=(0,s.Z)(e,i);return(0,l.jsxs)("div",{className:o,children:[a.error&&0===a.error.code&&a.touched&&!a.active&&(0,l.jsx)("p",{className:n,children:a.error.message}),a.error&&1===a.error.code&&(0,l.jsx)("p",{className:n,children:a.error.message}),a.error&&2===a.error.code&&a.touched&&!a.active&&(0,l.jsx)("p",{className:n,children:a.error.message}),(0,l.jsx)("textarea",(0,r.Z)((0,r.Z)({},t),c))]})}},3268:function(e,t,a){var r=a(5671),s=a(3144),o=a(136),n=a(5716),l=a(2791),i=a(364),c=a(6871),u=a(184);t.Z=function(e){var t=function(t){(0,o.Z)(l,t);var a=(0,n.Z)(l);function l(){return(0,r.Z)(this,l),a.apply(this,arguments)}return(0,s.Z)(l,[{key:"render",value:function(){return!1===this.props.isAuth?(0,u.jsx)(c.Fg,{to:"/login"}):(0,u.jsx)(e,{})}}]),l}(l.Component);return(0,i.$j)((function(e){return{isAuth:e.auth.isAuth}}))(t)}},1153:function(e,t,a){a.d(t,{Kb:function(){return n},Le:function(){return s},bq:function(){return o},qB:function(){return r}});var r=function(e){if("string"===typeof e)return/[a-zA-Z1-9]/.test(e)||0===e.length},s=function(e){if(!e||!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e))return{code:4,message:"Invalid email address"}},o=function(e){return function(t){return t?t&&t.length>e?{code:1,message:"Max length: ".concat(e," characters !")}:t&&!/[a-zA-Z1-9]/.test(t)?{code:2,message:"Value must contain numbers or letters !"}:void 0:{code:0,message:"Value mustn't be empty !"}}},n=function(e){return e&&e.length<4?{code:2,message:"Min length is 4 characters !"}:e&&e.length>35?{code:3,message:"Max length is 35 characters !"}:e&&!/[a-zA-Z]/.test(e)?{code:1,message:"Value must contain letters !"}:e?void 0:{code:0,message:"This field is required"}}}}]);
//# sourceMappingURL=826.295fff94.chunk.js.map