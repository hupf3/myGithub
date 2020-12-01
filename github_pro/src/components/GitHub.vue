<template>
    <div>
        <!-- 设置头部 -->
        <Row style="background:#25292e;height:60px">
            <br>
            <!-- logo -->
            <Button icon="logo-github"></Button>
            {{"&nbsp"}}
            <!-- 搜索框 --> 
            <Input suffix="ios-search" placeholder="Search or jump to..." style="background:#25292e;width: 300px;height:35px" />
            <!-- 四个功能选项框 -->
            <Button type="text" ghost>Pull requests</Button>
            <Button type="text" ghost>Issues</Button>
            <Button type="text" ghost>Marketplace</Button>
            <Button type="text" ghost>Explore</Button>

            <Button icon="md-bulb"></Button>
            <!-- 下拉框 -->
            <Dropdown>
                <Icon type="ios-add" color="white" size="15"></Icon>
                <Icon type="ios-arrow-down" color="white" size="15"></Icon>
                <DropdownMenu slot="list">
                    <DropdownItem>New repository</DropdownItem>
                    <DropdownItem>Import repository</DropdownItem>
                    <DropdownItem>New gist</DropdownItem>
                    <DropdownItem>New organization</DropdownItem>
                    <DropdownItem>New project</DropdownItem>
                </DropdownMenu>
            </Dropdown>
            {{"&nbsp"}} {{"&nbsp"}} {{"&nbsp"}}
            <Dropdown>
                <Avatar :src=user.avatar_url />
                <Icon type="ios-arrow-down" color="white" size="15"></Icon>
                <DropdownMenu slot="list">
                    <DropdownItem>Signed in as {{user.login}}</DropdownItem>
                    <Divider />
                    <DropdownItem>Your profile</DropdownItem>
                    <DropdownItem>Your repositories</DropdownItem>
                    <DropdownItem>Your projects</DropdownItem>
                    <DropdownItem>Your stars</DropdownItem>
                    <DropdownItem>Your gists</DropdownItem>
                    <Divider />
                    <DropdownItem>Upgrade</DropdownItem>
                    <DropdownItem>Feature preview</DropdownItem>
                    <DropdownItem>Help</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Sign out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </Row>
        <Row>
            <!-- 左边个人信息 -->
            <Col span="8">
                <Row style="height:60px; background:black">
                </Row>
                <!-- 头像 -->
                <img :src=user.avatar_url style="width:300px; height:300px; border-radius:50%;" />
                <Card dis-hover :bordered="false">
                    <p><Icon type="md-person"/> {{user.login}}</p>
                    <Button style="width:310px"><p>Edit profile</p></Button>
                    <p><Icon type="md-people"/> {{user.followers}} follower · {{user.following}} following · <Icon type="md-star-outline"/> 0</p>
                    <p><Icon type="md-school"/> {{user.company}}</p>
                    <p><Icon type="md-locate"/> {{user.location}}</p>
                </Card>
            </Col >
            
            <!-- 菜单 -->
            <Col style="background:white; height:60px">
                <Menu mode="horizontal" active-name="1">
                    <MenuItem name="1">
                        <Icon type="md-book" />
                        Overview
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-folder-outline" />
                        Repositories
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-list-box-outline" />
                        Projects
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-cube-outline" />
                        Packages
                    </MenuItem>
                </Menu>
            </Col>
        </Row>
    </div>
    
</template>
<script>
    export default {
        created () {
            // 获取个人数据
			this.getUserInfo()
        },
        data () {
            return {
                user:{}
            }
        },
        methods:{
            getUserInfo:function() {
                this.axios.get('/hupf3')
                    .then(res => {
                        var result = res.data
                        this.user = result
                        // console.log(this.user.avatar_url)
                    })
            }
        }
    }
</script>
