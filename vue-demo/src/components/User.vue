<template>
    <div class="component" id="user">
        <h3>ten toi la: {{name}}</h3>
        <h3>tuoi toi la: {{age}}</h3>
        <div class="row">
            <div class="col-xs-12 col-sm-6 col-6">
                <app-user-detail v-bind:age="age" @ageWasUpdated="age = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6 col-6">
                <app-user-edit v-bind:user-age="age" @ageWasEdit="age = $event"></app-user-edit>
            </div>
        </div>
        <button v-on:click="resetAge" >reset tuoi</button>
        <br>
        <label>ten toi la:</label>
        <input placeholder="nhap ten" v-model="newname" @keyup.enter="checkEnter">
        <br>
        <label>da bong</label>
        <input type="checkbox" v-model="checked" value="dabong">
        <label>choi game</label>
        <input type="checkbox" v-model="checked" value="choigame">
        <label>hoc</label>
        <input type="checkbox" v-model="checked" value="hoc">
        <br>
        <label>Toi thich: </label>
        <label>{{ checked }}</label>
        <br>
        <select name="language" v-model="thuong">
            <option value="" disabled="true" selected>Chọn...</option>
            <option value="code">code</option>
            <option value="An">an</option>
            <option value="NGu">ngu</option>
            <option value="cau ca">cau ca</option>
        </select>
        <p>Toi thuong: {{ thuong }}</p>
        
    </div>
</template>
<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function () {
            return {
                name: 'thang nge',
                age: 23,
                newname: '',
                checked: [],
                thuong: ''
            };
        },
        methods:{
            resetAge (){
                this.age = 23
            },
            checkEnter (){
                this.name = this.newname
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>
<style>
    #user {background-color:cadetblue}
</style>
