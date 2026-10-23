'use strict';
const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const html=fs.readFileSync(path.join(__dirname,'..','index.html'),'utf8');
const start=html.indexOf('const PATTERNS = ['),end=html.indexOf('function maskText(',start);
assert(start>=0&&end>start,'검사 규칙을 찾지 못했습니다.');
const sandbox=vm.createContext({});vm.runInContext(html.slice(start,end)+'\nthis.analyzeText=analyzeText;',sandbox);
const cases=[["사업장 주소 문맥","오시는길 캠퍼스 주소: 대구광역시 중구 동성로2길 14-1","address","주의",false,"사업장 정보 추정"],["거주지 주소 문맥","우리 집 주소는 서울특별시 마포구 양화로 188","address","높음",true,"개인 거주지 연관 의심"],["용도 미확인 주소","서울특별시 마포구 양화로 188","address","주의",true,"용도 미확인"],["경기도 다중 행정구역","경기도 성남시 분당구 대왕판교로 660","address","주의",true,null],["배송지 지번 주소","배송지: 대구광역시 중구 대봉동 99-10","address","높음",true,null],["사업장 일반전화","사업장 안내 연락처 053-123-4567","landline","주의",false,null],["개인 일반전화","우리 집 전화 02 1234 5678","landline","높음",true,null],["공백 포함 휴대전화","휴대전화 010 - 1234 - 5678","phone","높음",true,null],["이메일","hello@example.com","email","주의",true,null],["인증정보 형태","api_key: abcdefghi123456","apikey","높음",true,null]];
for(const [title,input,kind,risk,mask,context] of cases){test(title,()=>{const f=sandbox.analyzeText(input).find(x=>x.kind===kind);assert(f,'탐지 후보 없음');assert.equal(f.severity,risk);assert.equal(f.mask,mask);if(context)assert.equal(f.contextType,context);});}
