const app = Vue.createApp({
    data() {
        return {
            visible: true,
            friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com'
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com'
                },
            ],
            /*friends: [
                {
                    id: 'manuel',
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                    detailsVisible: true
                },
                {
                    id: 'julie',
                    name: 'Julie Jones',
                    phone: '09876 543 221',
                    email: 'julie@localhost.com',
                    detailsVisible: true
                },
            ],
            untuk bisa toggle detail bisa di tambahkan key baru pada array yaitu detail visible
            */
        }
    },
    methods: {
        toggleDetails() {
            // this.friends.forEach(element => {
            //     if (element.id === id) {
            //         element.detailsVisible = !element.detailsVisible;
            //     }
            // });
            //bisa pake cara di atas jika kita set id pada parameter di method karena dia akan looping mencara ID yang sama
            //kemudian baru di lakukan perubahan.

            //this.friends[id].detailsVisible = !this.friends[id].detailsVisible;
            //bisa pake cara di atas ini asal kita set parameter di method adalah index looping

            this.visible = !this.visible;
        }
    },
});
/*
di bawah ini adalah contoh pembuatan component pada vue. component ini membutuhkan identifier yang akan di gunakan sebagai tag html.
pada contoh di bawah identifier component nya adalah friend-contact, nanti ketika component ini di gunakan maka tag html yang perlu
di gunakan adalah <friend-contact></friend-contact>. component ini juga membutuhkan template dimana template HTML ini yang nanti akan di tampilkan
oleh identifier dan juga pada component ini sama seperti vueApp (ini sebenernya seperti mini vueApp) terdapat properties data, method,computed dan 
fitur vue yang lain nya yang biasa di gunakan pada vueApp.

app.component(
    'friend-contact', {
        template: `
        <li>
        <h2>{{friend.name}}</h2>
            <button @click="toggleDetails">Show Details</button>
            <ul v-if="visible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
            </ul>
            </li>
            `,
            data() {
                return {
                    visible: true,
                    friend: {
                        id: 'manuel',
                        name: 'Manuel Lorenz',
                        phone: '01234 5678 991',
                        email: 'manuel@localhost.com'
                    }
                }
            },
            methods: {
                toggleDetails() {
                    this.visible = !this.visible;
                }
            },
        }
        );
*/
app.mount('#app');