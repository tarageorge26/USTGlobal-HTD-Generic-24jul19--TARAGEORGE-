//   tableEle = document.createElement('table');
//  tr1=document.createElement('tr');
//  trd1=document.createElement('td');
//  trd1.textContent ='name';
//  trd2=document.createElement('td');
//  trd2.textContent ='age';

//  tr2=document.createElement('tr');
//  trd3=document.createElement('td');
//  trd3.textContent ='john';
//  trd4=document.createElement('td');
//  trd4.textContent =20;
//  tr1.appendChild(trd1);
//  tr1.appendChild(trd2);
//  tr2.appendChild(trd3);
//  tr2.appendChild(trd4);

//  let t=tableEle.appendChild(tr1);
//  console.log(t);
//  let t1=tableEle.appendChild(tr2);
//  console.log(t1);
//document.body.appendChild(tableEle);

document.getElementById('tableid').innerHTML= `<table border=1px>
                                                     <tr><td>john</td>
                                                     <td>20</td>
                                                     </tr>

                                                     <tr><td>john</td>
                                                     <td>20</td>
                                                     </tr>
                                                    
                                                     <tr><td>arun</td>
                                                         <td>25</td>
                                                     </tr>

                                                     <tr><td>dinga</td>
                                                     <td>30</td>
                                                     </tr>
                                                     </table>`;
                                                    

