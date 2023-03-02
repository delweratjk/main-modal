<script>
function main(purpose){
  BB.api.workflowInit({loan_purpose: purpose})
  BB.api.openModal("leadWorkflow")
}
</script>
