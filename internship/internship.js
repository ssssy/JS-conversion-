 var s='*:(G&FffBOn=]m>n=c`_,{%>`<r=?8,iB3]CZxz/w
  Q5h247TA:e*WXT$-;USjk1[Z-MwSP&;*f4wk.>o.^QFEk3gi-I10m
  f~uHn:QhKT=f)s.U&%SR%OK>ePjOy[eBwLK&s=[^5?|U{HDlZJyz?6
  :jk1W63VKxQaC_v&zf_Uo-r/k}LD*qQBDq$+jI$$Uw,`5WA?/rwgMclR$
  t8GBf7id=PE{!7)_c_;;n[d$=-=<*n?^Bp{S](l?5x:3fDvhs_FN8BG!z
    $AN4g-ZIGv>dRQW[V>^:fFA(wXki1A{gaBeOaSq6J1GLKhk}?&ppOqx
      B7>X8m<z:<)y}Vy4%`_^~H(~(D6%Ep+aSoei,[Ych?GQL0(}!TyvP
        s}99|pc_Ma=Yki%)t=l8ek]:D~2Vf&<3=u*.2lw!)acUCsDoPF&
 JsuKiV/qnb*A23UnK=g?MGK8`x(S1Hma_3>$/8QZMv}8[_3$1a:j?sVYs+){
  %i$c93SASK)Ud4=;>~0{wlqA|5E*zN((}IO{K-pET0>zpv,-~(zasPViB~u
    ONS-:H|^Ayl94F,?xr|G/bt4?ks<h(TAAq*d*eUF+*OCEMbN`Yq{D&Lw,%
      V+wk*mG&_>MB|Pz28faANBN1l=-q3c<7Zr1CE$L/l/CwJku,EHiW|xXyW
      B8,9.U2:/1?{+f2-?<jl][%bl(nL6uBq/S(N~*TdcbH-{9G-K09*usl|U
        .hT.zR;cptf&L(Y&.+t;ej;]LaV144e7eq[,N$r?acV]U9]w}&Zy<pl
          `8S]Z}?a-)zBE`5b=R+}dUlu5VM;M*eJSCkjsk?!GGR)EE2ECPAzH
 n)K1u~WpmJ*PC$b%H3l+tej5bk9D9LgZ`QVlD%(-8xu32)(P2c~`2C!iZ6!:-w
 >cPyvA.<CwMR*I{iF*$e$SJf}8D=.3r.QZ.:i^}7W~wz(WF,h(VG_CHg+(Sn!Qx&_
  [F6s?)4uzbE<bXnD{/jE+$-Ah(uU&km;V>pG^]djE~CcsNNH(>Km9';
    
  var x= s.replace(/[^A-Za-z0-9]/g, '');
  //console.log(isNaN(s.charAt(0).valueOf()))
  //console.log(typeof x.charAt(0))
  console.log(x)
  var arr =[];
  for(var i=0; i<x.length; i++){
  	if(isNaN(x.charAt(i))===false){
    var d = Math.abs((x.charAt(i)-3));
    d = d.toString();
    var g = "/"+x.charAt(i)+"/g";
    //g to object from string 
    eval("var obb="+g);
    x =x.replace(obb,d); 
    }
    arr.push(x.charAt(i))
  }
  //console.log(arr)
	for(var i=0; i<x.length; i++){
  	if(isNaN(x.charAt(i)) && x.charAt(i) == x.charAt(i).toUpperCase()){
    arr[i] += '!';
    }
  }
  x = arr.toString().replace(/,/g, '');
 console.log(x)