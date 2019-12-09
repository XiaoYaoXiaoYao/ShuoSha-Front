import Cookies from 'js-cookie'

/**
 *  map.put("token", jwt);
 map.put("name", resultUser.getNickName());
 map.put("avatar", resultUser.getAvatar());
 */
// 数据的key
const TokenKey = 'User-Token';
const NameKey = 'User-Name';
const AvatarKey = 'User-Avatar';

/**
 * 提供方法，用于保存用户数据
 */
export function setUser(token, name, avatar) {
  Cookies.set(TokenKey, token);
  Cookies.set(NameKey, name);
  Cookies.set(AvatarKey, avatar);
}

export function getUser() {
  return {
    token: Cookies.get(TokenKey),
    name: Cookies.get(NameKey),
    avatar: Cookies.get(AvatarKey)
  }
}

export function removeUser() {
  Cookies.remove(TokenKey);
  Cookies.set(NameKey);
  Cookies.set(AvatarKey);
}





