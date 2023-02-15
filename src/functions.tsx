// export const handleSubmit = async (e: Event) => {
//     e.preventDefault();
//     if (submitStatus() === status[0]) {
//       let error = false;
//       setSubmitStatus(status[1]);
//       setFirstSubmit(false);
//       if (!namePatern.test(surname())) {
//         setSurnameError(true);
//         error = true;
//       }
//       if (!namePatern.test(name())) {
//         setNameError(true);
//         error = true;
//       }
//       if (!mailPatern.test(mail())) {
//         setMailError(true);
//         error = true;
//       }

//       if (error) {
//         setTimeout(() => setSubmitStatus(status[2]), 1000);
//         return;
//       }
//       else {
//         try {
//            const response = await fetch('/api/mailing', {
//              method: 'POST',
//              headers: { 'Content-type': 'application/json' },
//              body: JSON.stringify({
//                surname: surname,
//                name: name,
//                mail: mail,
//                message: message
//              })
//            })
//            if (response.ok) {
//              router.reload(window.location.pathname)
//            }
//           setTimeout(() => setSubmitStatus(status[3]), 1000);
//         } catch (err) {
//           setTimeout(() => setSubmitStatus(status[2]), 1000);
//           console.error(err);
//         }
//       }
//     }
//   }

export const numberToTable = (nombre: number) => {
  let array = []
  for (let i = 0; i < nombre; i++) {
    array.push(String(i))
  }
  return array
}