<template>
    <div>
        <!-- 设置头部 -->
        <Row style="background:#25292e;height:60px;">
            <br>
            <!-- logo -->
            <Col style="text-align:left" span="6">
                {{"&nbsp"}}
                <Button icon="logo-github"></Button>
                {{"&nbsp"}}
                <!-- 搜索框 --> 
                <Input suffix="ios-search" placeholder="Search or jump to..." style="background:#25292e;width: 300px;height:35px" />
            </Col>
            <!-- 四个功能选项框 -->
            <Col style="text-align:left" span="8">
                <Button type="text" ghost>Pull requests</Button>
                <Button type="text" ghost>Issues</Button>
                <Button type="text" ghost>Marketplace</Button>
                <Button type="text" ghost>Explore</Button>
            </Col>
            <Col style="text-align:right" span="9">
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
                {{"&nbsp"}}
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
            </Col>
        </Row>
        <Row>
            <Col span="1">{{"&nbsp"}}</Col>
            <!-- 左边个人信息 -->
            <Col span="6">
                <Row style="height:60px; background:white">
                </Row>
                <!-- 头像 -->
                <img :src=user.avatar_url style="width:300px; height:300px; border-radius:50%;" />
                <Card dis-hover :bordered="false" style="text-align:left">
                    <p><Icon type="md-person"/> {{user.login}}</p>
                    <Button style="width:310px"><p>Edit profile</p></Button>
                    <p><Icon type="md-people"/> {{user.followers}} follower · {{user.following}} following · <Icon type="md-star-outline"/> 0</p>
                    <br/>
                    <p><Icon type="md-school"/> {{user.company}}</p>
                    <p><Icon type="md-locate"/> {{user.location}}</p>
                </Card>
            </Col >
            <Col span="16" style="background:white; height:60px">
                <!-- 菜单 -->
                <Row style="width:600px">
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
                </Row>
                <!-- 选择展示6个仓库 -->
                <Row style="text-align:left">
                    <br/>
                    <h4>Popular repositories</h4>
                    <Col span="12">
                        <Card dis-hover style="text-align:left;width:450px;height:130px;">
                            <Row style="height:40px"><p style="font-size:20px"><a :href=repos[0].html_url>{{repos[0].name}}</a></p></Row>
                            <Row style="height:40px"><p style="font-size:10px">{{repos[0].description}}</p></Row>
                            <Row style="height:40px"><p style="font-size:15px"><Icon type="md-paper-plane" /> {{repos[0].language}}</p></Row>
                        </Card>
                        <br/>
                        <Card dis-hover style="text-align:left;width:450px;height:130px;">
                            <Row style="height:40px"><p style="font-size:20px"><a :href=repos[2].html_url>{{repos[2].name  }}</a></p></Row>
                            <Row style="height:40px"><p style="font-size:10px">{{repos[2].description}}</p></Row>
                            <Row style="height:40px"><p style="font-size:15px"><Icon type="md-paper-plane" /> {{repos[2].language}}</p></Row>
                        </Card>
                        <br/>
                        <Card dis-hover style="text-align:left;width:450px;height:130px;">
                            <Row style="height:40px"><p style="font-size:20px"><a :href=repos[4].html_url>{{repos[4].name  }}</a></p></Row>
                            <Row style="height:40px"><p style="font-size:10px">{{repos[4].description}}</p></Row>
                            <Row style="height:40px"><p style="font-size:15px"><Icon type="md-paper-plane" /> {{repos[4].language}}</p></Row>
                        </Card>
                    </Col>
                    <Col span="1">
                        <Card dis-hover style="text-align:left;width:450px;height:130px;">
                            <Row style="height:40px"><p style="font-size:20px"><a :href=repos[1].html_url>{{repos[1].name  }}</a></p></Row>
                            <Row style="height:40px"><p style="font-size:10px">{{repos[1].description}}</p></Row>
                            <Row style="height:40px"><p style="font-size:15px"><Icon type="md-paper-plane" /> {{repos[1].language}}</p></Row>
                        </Card>
                        <br/>
                        <Card dis-hover style="text-align:left;width:450px;height:130px;">
                            <Row style="height:40px"><p style="font-size:20px"><a :href=repos[3].html_url>{{repos[3].name  }}</a></p></Row>
                            <Row style="height:40px"><p style="font-size:10px">{{repos[3].description}}</p></Row>
                            <Row style="height:40px"><p style="font-size:15px"><Icon type="md-paper-plane" /> {{repos[3].language}}</p></Row>
                        </Card>
                        <br/>
                        <Card dis-hover style="text-align:left;width:450px;height:130px;">
                            <Row style="height:40px"><p style="font-size:20px"><a :href=repos[5].html_url>{{repos[5].name  }}</a></p></Row>
                            <Row style="height:40px"><p style="font-size:10px">{{repos[5].description}}</p></Row>
                            <Row style="height:40px"><p style="font-size:15px"><Icon type="md-paper-plane" /> {{repos[5].language}}</p></Row>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
    
</template>
<script>
    export default {
        created () {
            // 获取个人数据
            this.getUser()
            // 获取仓库
            this.getRepos()
        },
        data () {
            return {
                user:{},
                repos:[]
            }
        },
        methods:{
            getUser:function() {
                this.axios.get('/hupf3')
                    .then(res => {
                        var result = res.data
                        this.user = result
                        // console.log(this.user.avatar_url)
                    })
            },
            getRepos:function() {
                this.axios.get('/hupf3/repos')
                    .then(res => {
                        var result = res.data
                        this.repos = result
                        // console.log(result)
                    })
            }
        }
    }
</script>
