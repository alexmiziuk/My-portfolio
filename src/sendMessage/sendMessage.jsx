import swal from 'sweetalert';

const baseUrl = 'https://api.telegram.org/bot/';

const sendMessage = async (message, getAllTextsOfSite) => {
  try {
    const url = `${baseUrl}sendMessage?chat_id=-4180692441&text=${message}`;
    const response = await fetch(url);
    if (response.ok) {
      const responseData = await response.json();
      console.log('response', responseData);
      swal({
        title: getAllTextsOfSite('swalTitleTrue'),
        text: getAllTextsOfSite('swalTextTrue'),
        button: false,
        className: "swal-title",
        timer: 4500,
      });
    } else {
      swal({
        title: getAllTextsOfSite('swalTitleFalse'),
        text: getAllTextsOfSite('swalTextFalse'),
        button: false,
        className: "swal-title",
        timer: 4500,
      });
      throw new Error('Ошибка при отправке сообщения');
    }
  } catch (error) {
    console.error('Ошибка при отправке сообщения:', error);
    swal({
      title: getAllTextsOfSite('swalTitleFalse'),
      text: getAllTextsOfSite('swalTextFalse'),
      button: false,
      className: "swal-title",
      timer: 4500,
    });
  }
};

export default sendMessage;
